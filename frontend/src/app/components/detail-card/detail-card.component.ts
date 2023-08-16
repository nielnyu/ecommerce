import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent {

  addCartButton = "Add To Cart"

  @Input () title = ""
  @Input () price = 0
  @Input () imageSrc = ""
  @Input () colors = []
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
