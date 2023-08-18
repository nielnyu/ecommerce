import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  //url = environment.base_url + "/login"

  url = environment.production === true ? "api/login" : "http://localhost:3000/api/login"


  authUser = (email: string, password: string) => {
    return this.http.post(this.url, {email: email, password: password})
  }


}
