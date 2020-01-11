import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import { User } from 'src/app/models/User';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user: User[];
  formulario = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
    date: new FormControl('')
  });
  constructor(private userService: UserService,  private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => this.getUser(params.id)
      );
  }
  getUser(id: number) {
    this.userService.getUser(id).subscribe(
      resp => this.user = resp,
      err => console.log(err)
    );
  }
  borrarUsuario() {
    // tslint:disable-next-line: no-string-literal
    this.userService.removeUser(this.user['id']).subscribe(
      resp => this.router.navigate(['']),
      err => console.log(err)
    );
  }
}
