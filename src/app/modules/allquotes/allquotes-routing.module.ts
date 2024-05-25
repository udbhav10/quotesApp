import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllquotesComponent } from './allquotes.component';
import { QuoteslistComponent } from './quoteslist/quoteslist.component';

const routes: Routes = [{ path: '', component: QuoteslistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllquotesRoutingModule { }
