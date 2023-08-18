import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }


  url = environment.production === true ? "api/register" : "http://localhost:3000/api/register"

  addUser = (email: string, password: string, repeat_password: string) =>{
    return this.http.post(this.url, {email: email, password: password, repeat_password: repeat_password})
  }


}
