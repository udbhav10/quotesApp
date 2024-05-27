import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
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
export class PopoverComponent implements OnInit {

  isHovered: boolean;
  popoverOpen: boolean;
  @Input() quoteTags: string;
  @Input() quoteContent: string;
  @Input() quoteAuthor: string;
  @Input() quoteDate: string;
  @Output() closeClick: EventEmitter<boolean> = new EventEmitter<boolean>();
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
