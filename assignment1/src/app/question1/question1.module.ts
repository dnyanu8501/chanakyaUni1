import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Question1RoutingModule } from './question1-routing.module';

import { CalculatorComponent } from './calculator/calculator.component';


@NgModule({
  declarations: [
   
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    Question1RoutingModule
  ]
})
export class Question1Module { }
