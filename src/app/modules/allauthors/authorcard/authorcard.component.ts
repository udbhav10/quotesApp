import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { authorObject } from '../../../definitions/authorObject';
@Component({
  selector: 'app-authorcard',
  templateUrl: './authorcard.component.html',
  styleUrls: ['./authorcard.component.scss']
})
export class AuthorcardComponent implements OnInit, OnDestroy {
  
  @Input() author: authorObject;
  @Input() imageLink: string;
  @Output() sendAuthorObject: EventEmitter<authorObject> = new EventEmitter<authorObject>();
  @ViewChildren('authorImage') authorImage: QueryList<ElementRef<HTMLImageElement>>;

  constructor() {  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.clearImageSource();
  }

  sendAuthor(): void {
    this.sendAuthorObject.emit(this.author);
  }

  clearImageSource(): void {
    if(this.authorImage) {
      this.authorImage.forEach( (imageRef: ElementRef<HTMLImageElement>) => {
        const imgElement = imageRef.nativeElement;
        imgElement.src = '';
      } )
    }
  }

}
