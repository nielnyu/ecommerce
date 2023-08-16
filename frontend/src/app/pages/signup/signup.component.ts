import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

    //handle event 

    onSubmit = () =>{
      console.log(this.signUpForm.value)
    }

}
