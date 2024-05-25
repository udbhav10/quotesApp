import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QotdComponent } from './qotd/qotd.component';

const routes: Routes = [{ path: '', component: QotdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullscreenquoteRoutingModule { }
