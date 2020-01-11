import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    console.log(this.user);
    }
    borrarUsuario() {
      this.userService.removeUser(this.user.id).subscribe(
        resp => console.log(resp),
        err => console.log(err)
      );
    }
    update() {
      console.log(this.user.id);
      this.router.navigate(['/edit/', this.user.id]);
    }
}
