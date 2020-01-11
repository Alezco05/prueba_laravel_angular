import { Component, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [];
  constructor(private usersService: UserService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(
      resp => this.users = resp,
      error => console.log(error)
    );
     }
}
