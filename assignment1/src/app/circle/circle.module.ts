import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CircleRoutingModule } from './circle-routing.module';
import { AddcircleComponent } from './addcircle/addcircle.component';


@NgModule({
  declarations: [
    AddcircleComponent
  ],
  imports: [
    CommonModule,
    CircleRoutingModule
  ]
})
export class CircleModule { }
