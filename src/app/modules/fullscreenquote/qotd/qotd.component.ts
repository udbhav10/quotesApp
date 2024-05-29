import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FetchquoteService } from '../../../services/fetchquoteservice/fetchquote.service';
import { quoteObject } from '../../../definitions/quoteObject';
import { PopoverComponent } from 'src/app/components/popover/popover.component';

@Component({
  selector: 'app-qotd',
  templateUrl: './qotd.component.html',
  styleUrls: ['./qotd.component.scss']
})
export class QotdComponent implements OnInit, OnDestroy {

  quoteOfTheDay: quoteObject;
  showPopover: boolean = false;
  intervalId: any;
  @ViewChild(PopoverComponent) thisPopover: PopoverComponent;

  constructor(private quoteAPI: FetchquoteService) { }

  ngOnInit(): void {
    this.quoteAPI.fetchRandom().subscribe( (data) => this.quoteOfTheDay = data );
    this.intervalId = setInterval( () => {
      this.quoteAPI.fetchRandom().subscribe( (data) => this.quoteOfTheDay = data );
    }, 5000 )
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  openPopover(): void {
    this.showPopover = true;
    setTimeout( () => {
      this.thisPopover.openPopover();
    }, 10 )  
    clearInterval(this.intervalId);
  }

  closePopover(): void {
    setTimeout( () => {
      this.showPopover = false;
    }, 200 )  
    this.intervalId = setInterval( () => {
      this.quoteAPI.fetchRandom().subscribe( (data) => this.quoteOfTheDay = data );
    }, 5000 )
  }

}
