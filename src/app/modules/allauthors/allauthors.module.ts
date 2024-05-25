import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AuthorslistComponent } from './authorslist/authorslist.component';
import { AuthorcardComponent } from './authorcard/authorcard.component';
import { AllauthorsRoutingModule } from './allauthors-routing.module';
import { AllauthorsComponent } from './allauthors.component';
import { AuthorpopoverComponent } from './authorpopover/authorpopover.component';

@NgModule({
  declarations: [
    AllauthorsComponent,
    AuthorcardComponent,
    AuthorslistComponent,
    AuthorpopoverComponent
  ],
  imports: [
    CommonModule,
    AllauthorsRoutingModule,
    SharedModule
  ]
})
export class AllauthorsModule { }
