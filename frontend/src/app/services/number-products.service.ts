import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberProductsService {

  constructor() { }

  prod_quantity: number
  setQuantity = (quantity: number) =>{
    this.prod_quantity = quantity
  }

  getQuantity = () =>{
    return this.prod_quantity
  }

}
