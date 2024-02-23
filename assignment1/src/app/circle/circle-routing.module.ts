import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcircleComponent } from './addcircle/addcircle.component';

const routes: Routes = [
  {path:'',component:AddcircleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CircleRoutingModule { }
