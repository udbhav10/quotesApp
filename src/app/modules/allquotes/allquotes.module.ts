import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllquotesRoutingModule } from './allquotes-routing.module';
import { AllquotesComponent } from './allquotes.component';

import { SharedModule } from '../../shared/shared.module';
import { QuoteslistComponent } from './quoteslist/quoteslist.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllquotesComponent,
    QuoteslistComponent
  ],
  imports: [
    CommonModule,
    AllquotesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AllquotesModule { }
