import { Component, OnInit } from '@angular/core';
import { FetchquoteService } from '../../../services/fetchquoteservice/fetchquote.service';
import { quoteObject } from '../../../definitions/quoteObject';
@Component({
  selector: 'app-qotd',
  templateUrl: './qotd.component.html',
  styleUrls: ['./qotd.component.scss']
})
export class QotdComponent implements OnInit {

  quoteOfTheDay: quoteObject;
  showPopover: boolean = false;
  intervalId: any;
  constructor(private quoteAPI: FetchquoteService) { }

  ngOnInit(): void {
    this.quoteAPI.fetchRandom().subscribe( (data) => this.quoteOfTheDay = data );
    this.intervalId = setInterval( () => {
      this.quoteAPI.fetchRandom().subscribe( (data) => this.quoteOfTheDay = data );
    }, 5000 )
  }

  openPopover(): void {

    this.showPopover = true;
    clearInterval(this.intervalId);
  }

  closePopover(): void {
    this.showPopover = false;
    this.intervalId = setInterval( () => {
      this.quoteAPI.fetchRandom().subscribe( (data) => this.quoteOfTheDay = data );
    }, 5000 )
  }

}
