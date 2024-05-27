import { Component, OnInit, ViewChild } from '@angular/core';
import { FetchquoteService } from '../../../services/fetchquoteservice/fetchquote.service';
import { quoteObject } from '../../../definitions/quoteObject';
import { PopoverComponent } from 'src/app/components/popover/popover.component';
@Component({
  selector: 'app-quoteslist',
  templateUrl: './quoteslist.component.html',
  styleUrls: ['./quoteslist.component.scss']
})
export class QuoteslistComponent implements OnInit {

  allQuotes: quoteObject[] = [];
  quoteTags: Set<string> = new Set<string>();
  selectedTag: string;
  searchButtonDisabled: boolean;
  selectedQuote: quoteObject;
  showPopover: boolean;
  @ViewChild(PopoverComponent) thisPopover: PopoverComponent;

  constructor(private quoteAPI: FetchquoteService) {
    this.searchButtonDisabled = true;
    this.selectedTag = "choose-a-tag";
    this.showAll();
  }

  ngOnInit(): void {
  }

  dropdownClick() {
    this.showPopover = false;
    this.searchButtonDisabled = (this.selectedTag === 'choose-a-tag') ? true : false;
  }

  showAll() {
    this.allQuotes = [];
    this.quoteAPI.fetchAll().subscribe((data: any[]) => {
      data.forEach(page => {
        this.allQuotes.push(...page.results);
      });
      this.allQuotes.forEach(quote => {
        quote.tags.forEach((tag) => this.quoteTags.add(tag));
      })
    });
    this.selectedTag = 'choose-a-tag';
    this.searchButtonDisabled = true;
  }

  tagSearch() {
    if (!this.searchButtonDisabled) {
      this.allQuotes = [];
      this.quoteAPI.fetchByTagName(this.selectedTag).subscribe((data) => this.allQuotes = data.results );
    }
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
