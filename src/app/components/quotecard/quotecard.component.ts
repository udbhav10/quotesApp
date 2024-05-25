import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { quoteObject } from '../../definitions/quoteObject';

@Component({
  selector: 'app-quotecard',
  templateUrl: './quotecard.component.html',
  styleUrls: ['./quotecard.component.scss']
})
export class QuotecardComponent implements OnInit {

  @Input() quote: quoteObject;
  @Input() tagsNotAuthorName: boolean;
  @Output() sendQuoteEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  viewFullQuote() {
    this.sendQuoteEvent.emit(this.quote);
  }

}
