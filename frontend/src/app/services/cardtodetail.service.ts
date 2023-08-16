import { Injectable } from '@angular/core';
import { ProductData } from '../interfaces/product-data';

@Injectable({
  providedIn: 'root'
})
export class CardtodetailService {

  constructor() { }

  products: ProductData[] = [{
    id: 1,
    name: "iPhone 12",
    category: "Phone",
    colors: ["Black", "Red", "Grey"],
    price: 999,
    in_stock: true,
    quantity: 3,
    pImage: "./assets/img/phones/black-iphone-12.jpeg"
  },
  {
    id: 2,
    name: "Macbook Air",
    category: "Computer",
    colors: ["Black", "Blue", "Grey"],
    price: 1999,
    in_stock: true,
    quantity: 7,
    pImage: "./assets/img/computers/grey-macbook-air.jpeg"
  },
  {
    id: 3,
    name: "Airpod Max",
    category: "HeadPhone",
    colors: ["Black", "Red", "Grey"],
    price: 899,
    in_stock: true,
    quantity: 32,
    pImage: "./assets/img/headphones/white-airpods-max.jpeg"
  },
  {
    id: 4,
    name: "iPhone 12",
    category: "Phone",
    colors: ["Black", "Red", "Grey"],
    price: 999,
    in_stock: true,
    quantity: 3,
    pImage: "./assets/img/iphone-12.jpeg"
  },
  {
    id: 5,
    name: "Macbook Air",
    category: "Computer",
    colors: ["Black", "Blue", "Grey"],
    price: 1999,
    in_stock: true,
    quantity: 7,
    pImage: "./assets/img/macbook-air.jpeg"
  },
  {
    id: 6,
    name: "Airpod Max",
    category: "HeadPhone",
    colors: ["Black", "Red", "Grey"],
    price: 899,
    in_stock: true,
    quantity: 32,
    pImage: "./assets/img/airpods-max.jpeg"
  }
]

  

  getProducts = () => {
    return this.products
  }

  single: ProductData
  setProduct = (id: number) => {
    this.single = this.products.find(product => product.id === id)
  }

  getSingleProduct = () =>{
    return this.single
  }

  getCategory = (category: string) =>{
    return this.products.filter(product => product.category === category)
  }



}
