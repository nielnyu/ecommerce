import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/register"

  addUser = (email: string, password: string, repeat_password: string) =>{
    return this.http.post(this.url, {email: email, password: password, repeat_password: repeat_password})
  }


}
