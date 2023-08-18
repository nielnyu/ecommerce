import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { PhoneComponent } from './pages/phone/phone.component';
import { ComputerComponent } from './pages/computer/computer.component';
import { HeadphoneComponent } from './pages/headphone/headphone.component';
import { CardComponent } from './components/card/card.component';
import { CartComponent } from './pages/cart/cart.component';
import { MockComponent } from './pages/mock/mock.component';

const routes: Routes = [
  {path: "", component: RegisterComponent},
  {path: "Login", component: LoginComponent},
  {path: "Signup", component: SignupComponent},
  {path: "Home", component: HomeComponent},
  {path: "Details", component: DetailsComponent},
  {path: "Phone", component: PhoneComponent},
  {path: "Computer", component: ComputerComponent},
  {path: "HeadPhone", component: HeadphoneComponent},
  {path: "Cart", component: CartComponent},
  {path: "Mock", component: MockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
