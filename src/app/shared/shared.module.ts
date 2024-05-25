import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PopoverComponent } from '../components/popover/popover.component';
import { QuotecardComponent } from '../components/quotecard/quotecard.component';
import { FormsModule } from '@angular/forms';
import { TrimPipe } from '../pipe/trim.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    PopoverComponent,
    QuotecardComponent,
    TrimPipe
  ],
  imports: [
    CommonModule, 
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    PopoverComponent,
    QuotecardComponent,
    TrimPipe,
    FormsModule
  ]
})
export class SharedModule { }
