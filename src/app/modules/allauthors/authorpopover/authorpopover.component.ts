import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { authorObject } from '../../../definitions/authorObject';

@Component({
  selector: 'app-authorpopover',
  templateUrl: './authorpopover.component.html',
  styleUrls: ['./authorpopover.component.scss']
})
export class AuthorpopoverComponent implements OnInit {

  @Input() author: authorObject;
  @Input() imageLink: string;
  @Output() closeClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closePopover() {
    this.closeClick.emit(false);
  }

}
