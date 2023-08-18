import { Component } from '@angular/core';
import { CardtodetailService } from 'src/app/services/cardtodetail.service';
import { Router } from '@angular/router';
import { ProductData } from 'src/app/interfaces/product-data';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent {
  //router and service instance
  constructor(private router: Router, public cardToService: CardtodetailService){
  }

  test_product: any = this.cardToService.getCategory("Computer")


  //handleClick

  onClick = (choosed: number) =>{
    console.log("product id", choosed)
    this.cardToService.setProduct(choosed)
    this.router.navigate((['Details']))
  }
  

}
