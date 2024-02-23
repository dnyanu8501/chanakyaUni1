import { Component } from '@angular/core';

@Component({
  selector: 'app-addcircle',
  templateUrl: './addcircle.component.html',
  styleUrls: ['./addcircle.component.scss']
})
export class AddcircleComponent {

  allCircle:any=[]
  count=0
changebg=false
  addcircle(){
    this.count++
    this.allCircle.push(this.count)
    console.log(this.allCircle);
    
  }
 
  changeColor(id:any){
    this.changebg=!this.changebg
    const selectcolor=document.getElementById(id)
  if(this.changebg)
  {
   
    selectcolor!.style.backgroundColor="green"
  }
  else{
    selectcolor!.style.backgroundColor="rgba(99, 136, 137, 0.418)"
  }
  }
}
