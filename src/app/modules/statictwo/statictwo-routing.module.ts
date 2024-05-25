import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatictwoComponent } from './statictwo.component';
import { StaticpagetwoComponent } from './staticpagetwo/staticpagetwo.component';

const routes: Routes = [{ path: '', component: StaticpagetwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatictwoRoutingModule { }
