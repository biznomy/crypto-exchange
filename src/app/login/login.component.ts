import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  username:string;
  password:string;
  errorshow: boolean = false;
  errormsg: string;
  successShow:boolean = false;
  succesmsg :string;

  constructor(private dataService: DataService,private router:Router) { }

  ngOnInit() {

  }

 

  login(){
    let d = {
      username : this.username,
      password: this.password
    }
    this.dataService.saveData("user/login",d).subscribe(data => {
      this.succesShow("login Successfully");
      this.dataService.setToken(data.token);
      if(this.dataService.role === "admin"){
          this.router.navigateByUrl('/userlist');
      }else{

      }

    }, err => {
     this.errshow("user id combination is password in Wrong");
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
