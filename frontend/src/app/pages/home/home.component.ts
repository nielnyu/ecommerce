import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardtodetailService } from 'src/app/services/cardtodetail.service';
import { ProductData } from 'src/app/interfaces/product-data';
import { LoadProductService } from 'src/app/services/load-product.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //router and service instance
  constructor(private router: Router, public cardToService: CardtodetailService, public loadingProduct: LoadProductService){
  }

  product: any
  productList$: any = this.loadingProduct.getProducts().pipe(tap((data) => this.product = data))



  //handleClick

  onClick = (choosed: number) =>{
    console.log("product id", choosed)
    console.log(this.productList$)
    this.cardToService.setProduct(choosed)
    this.router.navigate((['Details']))
  }
  
}
