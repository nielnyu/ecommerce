import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

    //signup button 
    signUpName = "Sign Up"

    //email input props
    placeEmail = "Enter Email"
    emailLabel = "Email:"
  
  
    //password input props
    placePassword = "Enter Password"
    passwordLabel = "Password:"

    //reenter password input props
    placeReenter = "Reenter Passowrd"
    reenterLabel = "Reenter Password"

    //Reactive Form
    signUpForm = new FormGroup({
      emailAddress: new FormControl(''),
      password: new FormControl(''),
      reenter: new FormControl(""),
    });

    constructor (public signUp: SignupService,private router: Router){}
    //handle event 

    message: string

    onSubmit = () =>{
      this.signUp.addUser(this.signUpForm.value.emailAddress, this.signUpForm.value.password, this.signUpForm.value.reenter)
      .subscribe((data: any) =>{
        if (data.message === "Email Added"){
          this.router.navigate(['Home'])
        }
        else{
          this.message = data.message
        }
      })
    }


}
