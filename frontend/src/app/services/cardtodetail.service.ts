import { Injectable } from '@angular/core';
import { ProductData } from '../interfaces/product-data';
import { LoadProductService } from './load-product.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardtodetailService {

  constructor(private loadingProduct: LoadProductService) { }

product : any
productList = this.loadingProduct.getProducts().subscribe((res) => {
  this.product = res
})

single: any

  setProduct = (id: number) => {
    this.single = this.product.find(prod => prod.prod_id === id)
  }

  getSingleProduct = () =>{
    return this.single
  }

  getCategory = (category: string) =>{
    return this.product.filter(prod => prod.category === category)
  }


}
