import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { authorObject } from '../../../definitions/authorObject';
@Component({
  selector: 'app-authorcard',
  templateUrl: './authorcard.component.html',
  styleUrls: ['./authorcard.component.scss']
})
export class AuthorcardComponent implements OnInit {
  
  @Input() author: authorObject;
  @Input() imageLink: string;
  @Output() sendAuthorObject: EventEmitter<authorObject> = new EventEmitter<authorObject>();
  constructor() {  }

  ngOnInit(): void {
  }
  sendAuthor(): void {
    this.sendAuthorObject.emit(this.author);
  }


}
