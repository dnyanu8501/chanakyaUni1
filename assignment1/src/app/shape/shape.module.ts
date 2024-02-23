import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShapeRoutingModule } from './shape-routing.module';
import { ChangeShapeComponent } from './change-shape/change-shape.component';


@NgModule({
  declarations: [
    ChangeShapeComponent
  ],
  imports: [
    CommonModule,
    ShapeRoutingModule
  ]
})
export class ShapeModule { }
