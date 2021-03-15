import { Component, OnInit } from '@angular/core';
import { Register } from '../Classes/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  info=["Facebook","Twitter","G-mail"];
  userModel=new Register("","","","");
  selected:string="default";
  hearFromHasErr=false;
  constructor() { }

  ngOnInit(): void {
  }
  submitData(){
    console.log(this.userModel);

  }
  validateHearFrom(value:string){
    if(value==="default")
    {
      this.hearFromHasErr=true;
    }
    else{
      this.hearFromHasErr=false;
    }

  }
  matchedPassword=false ;
  confirmPasswordFunc(confirmPass:string,pass:string)  {
    if(confirmPass!=pass)
    {
     this.matchedPassword=true;

    }else{
      this.matchedPassword=false;

    }
  }

}
