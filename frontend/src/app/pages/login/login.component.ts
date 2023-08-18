import { Component } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { InputComponent } from 'src/app/components/input/input.component';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

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
  constructor(private router: Router, public loginService: LoginService){
  }

  //handle event

  message: string

  onSubmit = (pageName: string) =>{
    this.loginService.authUser(this.loginForm.value.emailAddress, this.loginForm.value.password)
    .subscribe((data: any) =>{
      if (data.message === "Success"){
        this.router.navigate(['Home'])
      }
      else{
        this.message = data.message
      }
    })

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
