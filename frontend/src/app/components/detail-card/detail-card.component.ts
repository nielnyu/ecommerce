import { Component, Input } from '@angular/core';
import { NumberProductsService } from 'src/app/services/number-products.service';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent {

  addCartButton = "Add To Cart"

  constructor (public handleQuanitity: NumberProductsService){}

  @Input () title = ""
  @Input () price = 0
  @Input () imageSrc = ""
  @Input () colors = ""
  @Input () stock = 0
  @Input () count = 0



  //handle event 

  selectColor= (color:string) =>{
    console.log(color)
  }

  handleDelete = () =>{
    this.count --
  }

  handleAdd = () => {
    this.count ++
  }



}
