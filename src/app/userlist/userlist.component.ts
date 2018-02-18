import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: any[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData("admin/user/all").subscribe(data => {
      console.log(data);
      this.users = data.filter(user => {
        return user.role !== "admin"
      })
    });

  }
  delete() {
    alert("Delete under development")
  }
  edit() {
    alert("Edit under development")
  }
}
