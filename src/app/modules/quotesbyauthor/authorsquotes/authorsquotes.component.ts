import { Component, OnInit } from '@angular/core';
import { FetchquoteService } from '../../../services/fetchquoteservice/fetchquote.service';
import { FetchAuthorService } from '../../../services/fetchauthorservice/fetch-author.service';
import { quoteObject } from '../../../definitions/quoteObject';
import { authorObject } from '../../../definitions/authorObject';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private quoteAPI: FetchquoteService, private fetchAuthor: FetchAuthorService, private route: ActivatedRoute) {
    this.fetchAuthorNames();

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      if(params['author']) {
        this.selectedAuthor = params['author'];
      } else {
        this.selectedAuthor = "a-a-milne";
      }
    } )
    this.refreshAuthorQuotes();
  }

  refreshAuthorQuotes() {
    this.authorQuotes = [];
    this.fetchAuthorFromSlug();
    this.fetchCurrentAuthorImage();
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
    }
  
    closePopover() {
      this.showPopover = false;
    }

}