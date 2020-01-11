import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  today = new Date();
  min = moment('1910-01-02').format('YYYY-MM-DD');
  form = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
    date: new FormControl('')
  });
  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log(this.min);
  }
  click() {
    const date = moment(this.form.value.date).format('YYYY-MM-DD');
    const data = {
      nombre: this.form.value.name,
      apellidos: this.form.value.lastname,
      fechaNacimiento: date,
      pais: this.form.value.country,
      ciudad: this.form.value.city
    };
    this.userService.addUser(data).subscribe(
      resp => console.log(resp),
      err => console.log(err)
    );
  }
}
