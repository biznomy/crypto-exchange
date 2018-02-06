import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  email: string;
  firstName : string;
  LastName : string;
  Sponser : string;
  mobile : string;
  country : string;
  constructor() {
   }

  ngOnInit() {
  }
  signup(){
    
  }
}
