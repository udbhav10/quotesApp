import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { StaticoneRoutingModule } from './staticone-routing.module';
import { StaticoneComponent } from './staticone.component';
import { StaticpageComponent } from './staticpage/staticpage.component';


@NgModule({
  declarations: [
    StaticoneComponent,
    StaticpageComponent
  ],
  imports: [
    CommonModule,
    StaticoneRoutingModule,
    SharedModule
  ]
})
export class StaticoneModule { }
