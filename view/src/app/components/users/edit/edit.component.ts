import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {ActivatedRoute,Router} from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user: User[];
  constructor(private userService: UserService,  private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => this.getUser(params.id)
      );
  }
  getUser(id: number){
    this.userService.getUser(id).subscribe(
      resp => this.user = resp,
      err => console.log(err)
    );
  }
}
