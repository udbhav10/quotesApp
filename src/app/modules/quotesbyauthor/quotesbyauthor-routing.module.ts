import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesbyauthorComponent } from './quotesbyauthor.component';
import { AuthorsquotesComponent } from './authorsquotes/authorsquotes.component';

const routes: Routes = [{ path: '', component: AuthorsquotesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesbyauthorRoutingModule { }
