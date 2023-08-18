import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { LoadProductService } from 'src/app/services/load-product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  checkOut = "Check Out"


  constructor (public cartService: CartService, public productService: LoadProductService, public router: Router) {

  }

  inYourCart: any = this.cartService.viewCartID()

  sum: number = 0
  getTotal = () =>{
    this.inYourCart.forEach(prod => {
      this.sum += prod.price
    })
    return this.sum
  }

  total = this.getTotal()


  handleCheckout = () =>{
    this.inYourCart.forEach(prod =>{
      this.productService.updateProducts(prod.prod_id).subscribe((data: any)=> {
        if (data.message === "Success"){
          this.router.navigate(['Home'])
        }else{
          console.log(data.message)
        }

      })
      
    })
  }

  


}
