import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

const url = "http://localhost:3000/";
declare var window:any;

@Injectable()
export class DataService {
  token : string;
  role : string;
  constructor(private http: Http) { }

  getData(appendUrl) {
    let headers = new Headers({ "Authorization": this.getToken()  });
    let options = new RequestOptions({ headers: headers });
   // let authToken =  { Authorization: this.getToken };
    return this.http.get(url+appendUrl,options)
      .map((res: Response) => res.json())
  }

  saveData(appendUrl, body) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let bodyStr = JSON.stringify(body);
    return this.http.post(url+ appendUrl , bodyStr, options).map((res: Response) => res.json());
  }
  getCountrylist() {
    return this.http.get(`http://country.io/names.json`);
  }
  setToken(token){
      this.token = "JWT "+token;
      let sd = token.split(".");
      let payload = window.atob(sd[1]);
      this.role = (payload) ?  JSON.parse(payload).role : "user"
  }
 getToken(){
   return this.token;
 }
}
