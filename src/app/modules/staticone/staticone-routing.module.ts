import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticpageComponent } from './staticpage/staticpage.component';

const routes: Routes = [{ path: '', component: StaticpageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticoneRoutingModule { }
