import { Component,Input } from '@angular/core';
import { CardtodetailService } from 'src/app/services/cardtodetail.service';
import { ProductData } from 'src/app/interfaces/product-data';
import { CartService } from 'src/app/services/cart.service';
import { NumberProductsService } from 'src/app/services/number-products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  addCartButton = "Add To Cart"

  constructor(public cardToDetail: CardtodetailService, public cartService: CartService, public numberPro: NumberProductsService){
  }

  productChoosed: any = this.cardToDetail.getSingleProduct()



  //handle event

  count = 0

  handleAddCart = () =>{
    this.count ++
    this.cartService.addToCart(this.productChoosed.prod_id)
    console.log(this.cartService.viewCartID())
    
  }

  




}
