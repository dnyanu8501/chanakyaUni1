import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeShapeComponent } from './change-shape/change-shape.component';

const routes: Routes = [
  {path:'',component:ChangeShapeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShapeRoutingModule { }
