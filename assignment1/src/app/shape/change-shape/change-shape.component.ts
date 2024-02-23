import { Component } from '@angular/core';

@Component({
  selector: 'app-change-shape',
  templateUrl: './change-shape.component.html',
  styleUrls: ['./change-shape.component.scss']
})
export class ChangeShapeComponent {

  circle:any=[]
  square:any=[]
  count=0
  count1=0

  addcircle(){
 this.count++
 this.circle.push(this.count)
  }
  addsquare(){
    this.count1++
    this.square.push(this.count1)
  }
}