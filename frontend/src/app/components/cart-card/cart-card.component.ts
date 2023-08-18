import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent {

  @Input () title = ""
  @Input () price = 0
  @Input () imageSrc = ""
  @Input () removed = ""

  constructor(public cartService: CartService){}




}
