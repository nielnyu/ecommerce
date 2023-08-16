import { Component } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { InputComponent } from 'src/app/components/input/input.component';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //button components props
  loginName = "Login"
  showPasswordName = "Show Password"

  //email input props
  placeEmail = "Enter Email"
  emailLabel = "Email:"


  //password input props
  placePassword = "Enter Password"
  passwordLabel = "Password:"
  

  //reactive form

  loginForm = new FormGroup({
    emailAddress: new FormControl(''),
    password: new FormControl(''),
  });

  //router
  constructor(private router: Router){
  }

  //handle event

  onSubmit = (pageName: string) =>{
    console.log("Submitted")
    console.log(this.loginForm.value)
    this.router.navigate(([`${pageName}`]))

  }

  show: any
  handlePass = () =>{
    this.show = document.getElementById("userPass")
    if (this.show.type === "password"){
      this.show.type = "text"
    }
    else{
      this.show.type = "password"
    }
  }


}
