import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllauthorsComponent } from './allauthors.component';
import { AuthorslistComponent } from './authorslist/authorslist.component';

const routes: Routes = [{ path: '', component: AuthorslistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllauthorsRoutingModule { }
