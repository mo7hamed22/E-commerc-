import { Component } from '@angular/core';
import { IProduct } from './shared classes and types/interfaceProduct';
declare var $: any;



@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

   producstFromChildInApp:IProduct[]=[];
  myProfile:string ="myIdProfile"
  title = 'fristProject';
  constructor(){}
  
  ngOnInit() {
    // $(document).ready(function() {
    //   alert('I am Called From jQuery');
    // });
   
 }


}
