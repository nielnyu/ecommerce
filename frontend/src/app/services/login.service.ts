import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/login"

  authUser = (email: string, password: string) => {
    return this.http.post(this.url, {email: email, password: password})
  }


}
