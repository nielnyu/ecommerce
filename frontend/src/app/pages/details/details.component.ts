import { Component,Input } from '@angular/core';
import { CardtodetailService } from 'src/app/services/cardtodetail.service';
import { ProductData } from 'src/app/interfaces/product-data';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  addCartButton = "Add To Cart"

  constructor(public cardToDetail: CardtodetailService){
  }

  productChoosed: ProductData = this.cardToDetail.getSingleProduct()

  //handle event

  handleAddCart = () =>{
    
  }

  




}
