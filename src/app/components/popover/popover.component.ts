import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  isHovered: boolean;

  @Input() quoteTags: string;
  @Input() quoteContent: string;
  @Input() quoteAuthor: string;
  @Input() quoteDate: string;
  @Output() closeClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
 
  }

  closePopover() {
    this.closeClick.emit(false);
  }

}
