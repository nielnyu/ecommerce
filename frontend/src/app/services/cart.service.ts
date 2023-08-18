import { Injectable } from '@angular/core';
import { LoadProductService } from './load-product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private loadingProduct: LoadProductService) { }

  currCart: number[] = []

  product : any
  productList = this.loadingProduct.getProducts().subscribe((res) => {
  this.product = res
  })

  addToCart = (choosedID: number) =>{
    this.currCart.push(this.product.find(prod => prod.prod_id === choosedID))
    
  }


  removeFromCart = (product: number) =>{
    for (let index = 0; index < this.currCart.length; index++){
      if (this.currCart[index] === product){
        this.currCart.splice(index, 1)
      }
    }
  }

  viewCartID = () =>{
    return this.currCart
  }



}
