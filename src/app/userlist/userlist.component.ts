import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit() {
     this.dataService.getData("admin/user/all").subscribe(data => {
        console.log(data);
     });

  }

}
