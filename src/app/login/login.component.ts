import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password:string;
  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  login(){
    let d = {
      email : this.email,
      password: this.password
    }
    this.dataService.saveData("user/login",d).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

}
