import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  timeout: number;
  gettingOtp: boolean;
  gettingOtptext: string;
  errorshow: boolean = false;
  errormsg: string;
  otp: string;
  successShow: boolean = false;
  succesmsg: string;
  email: string;
  password:string;
  


  constructor(private dataService: DataService) {
    this.gettingOtptext = "Get code on email";
    this.gettingOtp = true;
  }

  ngOnInit() {
  }
  forgetpassword() {
    if (!this.email) {
      this.errshow("Email is required");
    }
    else {

      this.dataService.getData("user/fetch?email=" + this.email).subscribe(data => {
        this.succesShow("OTP sent please check your mail INBOX OR SPAM ")
      }, err => {
        this.errshow("OTP not send");
      });
    }
  }
  forget(){
    let d = {
      email : this.email,
      password: this.password,
      otp: this.otp

    }
    this.dataService.saveData("user/changepassword",d).subscribe(data => {
      this.succesShow("login password change");
    }, err => {
     this.errshow("Wrong")
    });
  }
  errshow(msg) {
    this.errorshow = true;
    this.errormsg = msg;
    setTimeout(() => {
      this.errorshow = false;
    }, 3000)
  }

  succesShow(msg) {
    this.successShow = true;
    this.succesmsg = msg;
    setTimeout(() => {
      this.successShow = false;
    }, 3000)
  }
  emptyField(){
    this.email = "";
    this.password = "";
    this.otp ="";
  }
}
