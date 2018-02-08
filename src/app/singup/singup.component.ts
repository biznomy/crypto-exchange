import { Component,OnInit,Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,Validators,AbstractControl,ValidatorFn } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})

export class SingupComponent implements OnInit {
  email: string;
  firstName: string;
  LastName: string;
  Sponser: string;
  mobile: string;
  password: any;
  confirmPassword:any;
  country: string;
  role: string;
  gettingOtp:boolean;
  timeout : number;
  gettingOtptext:string;
  errorshow : boolean = false;
  errormsg : string ;



  constructor(private dataService: DataService) {
    this.gettingOtptext = "Get code on email";
    this.gettingOtp = true;
  }

  ngOnInit() {
  }
  signup() {
    var d = {
      email: this.email,
      username:this.firstName,
      firstname: this.LastName,
      parent: this.Sponser,
      mobile: this.mobile,
      password: this.password,
      
      role:"user"
      //country: "india"
    }
    this.dataService.saveData("user/register",d).subscribe(data => {
      console.log(data);
    }, err => {
      this.errorshow = true;
      this.errormsg = err;
      setTimeout(()=>{
        this.errorshow = false;
      },2000)
    });

  }
  getOtp() {
    this.gettingOtp = true;
    this.gettingOtptext = "Enter otp from Email";
    // this.dataService.getCountrylist().subscribe(data => {
    //   console.log(data)
    // }, err => {
    //   console.log(err)
    // });
  }

  
 
}
