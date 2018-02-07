import { Component, OnInit } from '@angular/core';
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
  password: string;
  country: string;
  role: string;


  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }
  signup() {
    var d = {
      email: this.email,
      username: this.firstName,
      //username: this.LastName,
      //Sponser: this.Sponser,
      //mobile: this.mobile,
      password: "this.password",
      role:"user"
      //country: "india"
    }
    this.dataService.saveData("user/register",d).subscribe(data => {
      console.log(data)
    }, err => {
      console.log(err)
    });

  }
  getOtp() {
    console.log("data")
    this.dataService.getCountrylist().subscribe(data => {
      console.log(data)
    }, err => {
      console.log(err)
    });
  }
}
