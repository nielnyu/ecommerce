import { Component } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  //Properties    
  loginName = "Login"
  signUpName = "Sign Up"


  //router
  constructor(private router: Router){
  }

  
  //Handling Events
  handleLogin = (pageName: string) =>{
    this.router.navigate([`${pageName}`])
  }

  handleSignUp = (pageName: string) =>{
    console.log(environment.production)
    this.router.navigate([`${pageName}`])
  }

}
