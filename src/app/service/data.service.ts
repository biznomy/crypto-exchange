import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

const url = "http://localhost:3000/";

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getData(appendUrl) {
    return this.http.get(url+appendUrl)
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
}
