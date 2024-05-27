import { Component, OnInit, ViewChild } from '@angular/core';
import { FetchAuthorService } from '../../../services/fetchauthorservice/fetch-author.service';
import { authorObject } from '../../../definitions/authorObject';
import { AuthorpopoverComponent } from '../authorpopover/authorpopover.component';

@Component({
  selector: 'app-authorslist',
  templateUrl: './authorslist.component.html',
  styleUrls: ['./authorslist.component.scss']
})
export class AuthorslistComponent implements OnInit {

  allAuthors: authorObject[] = [];
  showPopover: boolean;
  author: authorObject;
  @ViewChild(AuthorpopoverComponent) thisPopover: AuthorpopoverComponent;

  constructor(private fetchAuthor: FetchAuthorService) {

   }

  ngOnInit(): void {
    this.showAll();
  }

  showAll() {
    this.allAuthors = [];
    this.fetchAuthor.fetchAll().subscribe((data: any[]) => {
      data.forEach(page => {
        this.allAuthors.push(...page.results);
      });

    });
  }

  getImageLink(authorSlug: string): string {
    const link = this.fetchAuthor.fetchAuthorImage(authorSlug);
    return link;
  }

  openPopover(authorObj: authorObject): void {
    this.author = authorObj;
    this.showPopover = true;
    setTimeout( () => {
      this.thisPopover.openPopover();
    }, 10 )  
  }

  closePopover(): void {
    setTimeout( () => {
      this.showPopover = false;
    }, 200 ) 
  }

}
