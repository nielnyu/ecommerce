import { Component } from '@angular/core';
import { LoadProductService } from 'src/app/services/load-product.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css']
})
export class MockComponent {

  constructor(public pService: LoadProductService){

  }

  product: any
  productList$: any

  run = () =>{
    this.productList$ = this.pService.getProducts().pipe(tap((data) => this.product = data))
  }

}
