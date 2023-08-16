import { Component } from '@angular/core';
import { CardtodetailService } from 'src/app/services/cardtodetail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor (private router: Router){
  }

  //handle Events 
  handleNav = (pageName: string) =>{
    this.router.navigate(([`${pageName}`]))
  }


}
