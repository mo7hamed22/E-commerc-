import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register-reactive',
  templateUrl: './register-reactive.component.html',
  styleUrls: ['./register-reactive.component.scss']
})
export class RegisterReactiveComponent implements OnInit {
  info=["Facebook","Twitter","G-mail"];
  selected:string="default";
  // =======
  registerForm=this.fb.group({
    email:['',Validators.required],
    userName:['',[Validators.required,Validators.minLength(4)]],
    password:['',Validators.required],
    confirmPassword:['',Validators.required],
    hearFrom :['']
     
  });
  get email()
  {
    return this.registerForm.controls.email
  };
  get  userName(){return this.registerForm.controls.userName};
  get password(){return this.registerForm.controls.password};
 get confirmPassword(){return this.registerForm.controls.confirmPassword};

  get hearFrom(){
    return this.registerForm.get('hearFrom')
  }
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  getDataFromApi(){
    //for Must aLL Data use SetValue
    // this.registerForm.setValue({
    //   email:"mo@mo.com",
    //   password:"1234",
    //   confirmPassword:"1234",
    //   userName:"mohamed",
    //   hearFrom:this.info[0]

    // })
//For Optional Data set Use patchValue
this.registerForm.patchValue({
  email:"mo@mo.com",
 
  userName:"mohamed",
  hearFrom:this.info[1]

})
}
funcHearFrom(e:any) {
  // console.log(e.value)
  this.hearFrom?.setValue(e.target.value,{
    onlyself:true

  })
}

}
