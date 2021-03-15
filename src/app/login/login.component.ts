import { Component, OnInit } from '@angular/core';
import { Login } from '../Classes/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
userLogin=new Login("mo@hh.com","1234");
  constructor() { }

  ngOnInit(): void {
  }
  submitData(){
    
  }

}
