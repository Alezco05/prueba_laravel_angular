import { Component, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FilterPipe } from '../../pipes/filter.pipe';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [];
  options: string[] = ['Cédula', 'Nombre', 'País'];
  ordenarOption: string;
  constructor(private usersService: UserService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(
      resp => this.users = resp,
      error => console.log(error)
    );
     }
     ordenarProductos() {
       this.usersService.ordernarUser(this.users, this.ordenarOption);
    }
}
