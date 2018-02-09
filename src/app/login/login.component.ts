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
  errorshow: boolean = false;
  errormsg: string;
  successShow:boolean = false;
  succesmsg :string;

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  forgetpassword(){
    if (!this.email) {
      this.errshow("Email is required");
     }
     else {
      let d = {
        email : this.email
      }
      this.dataService.saveData("user/login",d).subscribe(data => {
        this.succesShow("User Id password sent please check your mail INBOX OR SPAM ")
      }, err => {
        console.log(err);
      });
     }   
  }

  login(){
    let d = {
      username : this.email,
      password: this.password
    }
    this.dataService.saveData("user/login",d).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

  errshow(msg){
    this.errorshow = true;
    this.errormsg = msg;
    setTimeout(() => {
      this.errorshow = false;
    }, 3000)
  }

  succesShow(msg){
    this.successShow = true;
    this.succesmsg = msg;
    setTimeout(() => {
      this.successShow = false;
    }, 3000)
  }
}
