import { Component, OnInit, Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
declare var jQuery:any;
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})

export class SingupComponent implements OnInit {
  email: string;
  firstName: string;
  lastName: string;
  Sponser: string;
  mobile: string;
  password: any;
  confirmPassword: any;
  country: string;
  role: string;
  gettingOtp: boolean;
  timeout: number;
  gettingOtptext: string;
  errorshow: boolean = false;
  errormsg: string;
  otp:string;
  successShow:boolean = false;
  succesmsg :string;

  constructor(private dataService: DataService,private router:Router) {
    this.gettingOtptext = "Get code on email";
    this.gettingOtp = true;
  }

  ngOnInit() {
  }
  signup() {
    var d = {
      email: this.email,
      username: this.firstName,
      firstname: this.firstName,
      lastname:this.lastName,
      parent: this.Sponser,
      mobile: this.mobile,
      password: this.password,
      role: "user",
      otp: this.otp
      //country: "india"
    }

    this.dataService.saveData("user/register", d).subscribe(data => {
     // this.succesShow("You are registered !  " )
     jQuery('#myModal .modal-title').html("Welcome");
     jQuery('#myModal .modal-body').html("<p>Please remember user id for login (sent on email)</p><div><strong>USER ID : "+data.username+"</strong></div>")
     jQuery('#myModal').modal('show');
     this.emptyField()
     this.router.navigateByUrl('/login');
    }, err => {
      this.errshow(err);
    });

  }
  getOtp() {
    this.gettingOtp = true;
    this.gettingOtptext = "Enter otp from Email";
    if (!this.email) {
     this.errshow("Email is required");
    }
    else {
      let data = { email: this.email };
      console.log(data);
      this.dataService.saveData("user/request",data).subscribe(data => {
        this.succesShow("OTP sent please check your mail INBOX OR SPAM ")
      }, err => {
        this.errshow("OTP not send");
      });
    }
  }
  emptyField(){
    this.email = "";
    this.password = "";
    this.otp ="";
    this.firstName = "";
    this.lastName = "";
    this.Sponser = "";
    this.mobile = "";

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
