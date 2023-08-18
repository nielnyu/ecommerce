import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mock } from '../interfaces/mock';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoadProductService {

  constructor(private http: HttpClient) { }

  proList: any

  //url = environment.base_url + "/product"

  url = environment.production === true ? "api/product" : "http://localhost:3000/api/product"

  getProducts = () : Observable<Mock[]> =>{
    return this.http.get<Mock[]>(this.url)
  }

  updateProducts = (id: number) =>{
    return this.http.post(this.url, {id: id})
  } 

}
