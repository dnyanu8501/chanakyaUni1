import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'question1',loadChildren:()=>import('./question1/question1.module').then(m=>m.Question1Module)},
  {path:'question3',loadChildren:()=>import('./circle/circle.module').then(m=>m.CircleModule)},
  {path:'question2',loadChildren:()=>import('./shape/shape.module').then(m=>m.ShapeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
