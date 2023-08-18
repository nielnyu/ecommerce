import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './pages/details/details.component';
import { DetailCardComponent } from './components/detail-card/detail-card.component';
import { PhoneComponent } from './pages/phone/phone.component';
import { ComputerComponent } from './pages/computer/computer.component';
import { HeadphoneComponent } from './pages/headphone/headphone.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartCardComponent } from './components/cart-card/cart-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MockComponent } from './pages/mock/mock.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    RegisterComponent,
    LoginComponent,
    InputComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    CardComponent,
    DetailsComponent,
    DetailCardComponent,
    PhoneComponent,
    ComputerComponent,
    HeadphoneComponent,
    CartComponent,
    CartCardComponent,
    MockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
