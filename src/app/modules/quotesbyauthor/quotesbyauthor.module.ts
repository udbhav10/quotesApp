import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { QuotesbyauthorRoutingModule } from './quotesbyauthor-routing.module';
import { QuotesbyauthorComponent } from './quotesbyauthor.component';
import { AuthorsquotesComponent } from './authorsquotes/authorsquotes.component';

@NgModule({
  declarations: [
    QuotesbyauthorComponent,
    AuthorsquotesComponent
  ],
  imports: [
    CommonModule,
    QuotesbyauthorRoutingModule,
    SharedModule
  ]
})
export class QuotesbyauthorModule { }
