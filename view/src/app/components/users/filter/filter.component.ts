import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  users = [];
  constructor(private usersService: UserService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(
      resp => this.users = resp,
      error => console.log(error)
    );
     }

}
