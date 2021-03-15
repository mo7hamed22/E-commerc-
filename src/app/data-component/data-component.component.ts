import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-component',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.scss']
})
export class DataComponentComponent implements OnInit {
  name="";
  isTrue= true
  
    constructor() { }
    
    
  ngOnInit(): void {
  }
  display()
    {
      if(this.name==="true")
      {
          this.isTrue=true ;
      }
      if(this.name==="false")
      {
          this.isTrue=false ;
      }
      
    }

}
