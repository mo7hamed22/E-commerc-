import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.scss']
})
export class LoginReactiveComponent implements OnInit {
  login=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
     
  });
  get email()
  {
    return this.login.controls.email
  };
  get password(){return this.login.controls.password};

 
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  


}