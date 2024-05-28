import { Component, OnInit,ViewChild } from '@angular/core';
import { FetchquoteService } from '../../../services/fetchquoteservice/fetchquote.service';
import { FetchAuthorService } from '../../../services/fetchauthorservice/fetch-author.service';
import { quoteObject } from '../../../definitions/quoteObject';
import { authorObject } from '../../../definitions/authorObject';
import { ActivatedRoute } from '@angular/router';
import { PopoverComponent } from 'src/app/components/popover/popover.component';

@Component({
  selector: 'app-authorsquotes',
  templateUrl: './authorsquotes.component.html',
  styleUrls: ['./authorsquotes.component.scss']
})
export class AuthorsquotesComponent implements OnInit {

  authorQuotes: quoteObject[] = [];
  allAuthors: authorObject[] = [];
  selectedAuthor: string;
  currentAuthor: authorObject;
  currentAuthorImageLink: string;
  selectedQuote: quoteObject;
  showPopover: boolean;
  @ViewChild(PopoverComponent) thisPopover: PopoverComponent;


  constructor(private quoteAPI: FetchquoteService, private fetchAuthor: FetchAuthorService, private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.fetchAuthorNames();
    this.route.queryParams.subscribe( params => {
      if(params['author']) {
        this.selectedAuthor = params['author'];
      } else {
        this.selectedAuthor = "a-a-milne";
      }
      this.refreshAuthorQuotes();
    } )

  }

  refreshAuthorQuotes() {
    this.authorQuotes = [];
    this.currentAuthorImageLink = "";
    this.fetchCurrentAuthorImage();
    this.fetchAuthorFromSlug();
    this.quoteAPI.fetchByAuthor(this.selectedAuthor).subscribe((data) => this.authorQuotes = data.results);
  }

  fetchAuthorFromSlug() {

    this.fetchAuthor.fetchByAuthorSlug(this.selectedAuthor).subscribe( (data) => this.currentAuthor = data.results[0] );
  }

  fetchAuthorNames() {
  
    this.fetchAuthor.fetchAll().subscribe((data: any[]) => {
      data.forEach(page => {
        this.allAuthors.push(...page.results)
    });
      });
    }

    fetchCurrentAuthorImage() {
      this.currentAuthorImageLink = this.fetchAuthor.fetchAuthorImage(this.selectedAuthor);
    }

    openPopover(quote: quoteObject) {
      this.selectedQuote = quote;
      this.showPopover = true;
      setTimeout( () => {
        this.thisPopover.openPopover();
      }, 10 )  
    }
  
    closePopover() {
      setTimeout( () => {
        this.showPopover = false;
      }, 200 ) 
    }

}