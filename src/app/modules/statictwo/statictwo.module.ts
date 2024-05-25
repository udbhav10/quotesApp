import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { StatictwoRoutingModule } from './statictwo-routing.module';
import { StatictwoComponent } from './statictwo.component';
import { StaticpagetwoComponent } from './staticpagetwo/staticpagetwo.component';

@NgModule({
  declarations: [
    StatictwoComponent,
    StaticpagetwoComponent
  ],
  imports: [
    CommonModule,
    StatictwoRoutingModule,
    SharedModule
  ]
})
export class StatictwoModule { }
