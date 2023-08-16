import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardtodetailService } from 'src/app/services/cardtodetail.service';
import { ProductData } from 'src/app/interfaces/product-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //router and service instance
  constructor(private router: Router, public cardToService: CardtodetailService){
  }

  test_product: ProductData[] = this.cardToService.getProducts()


  //handleClick

  onClick = (choosed: number) =>{
    console.log("product id", choosed)
    this.cardToService.setProduct(choosed)
    this.router.navigate((['Details']))
  }
  
}
