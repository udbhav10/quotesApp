import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FullscreenquoteRoutingModule } from './fullscreenquote-routing.module';
import { FullscreenquoteComponent } from './fullscreenquote.component';
import { QotdComponent } from './qotd/qotd.component';

@NgModule({
  declarations: [
    FullscreenquoteComponent,
    QotdComponent
  ],
  imports: [
    CommonModule,
    FullscreenquoteRoutingModule,
    SharedModule
  ]
})
export class FullscreenquoteModule { }
