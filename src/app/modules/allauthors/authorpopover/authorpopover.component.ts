import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { authorObject } from '../../../definitions/authorObject';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-authorpopover',
  templateUrl: './authorpopover.component.html',
  styleUrls: ['./authorpopover.component.scss'],
  animations: [
    trigger('popoverTransition', [
      state('open', style({
        'transform': 'translate(-50%, -50%) scale(1)'
      })),
      state('closed', style({
        'transform': 'translate(-50%, -50%) scale(0)',
        'z-index': -1
      })),
      transition('open <=> closed', animate('0.2s ease-in-out'))
    ])
  ]
})
export class AuthorpopoverComponent implements OnInit {

  @Input() author: authorObject;
  @Input() imageLink: string;
  @Output() closeClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  popoverOpen: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  openPopover() {
    this.popoverOpen = true;
  }

  closePopover() {
    this.popoverOpen = false;
    this.closeClick.emit(false);
  }

}
