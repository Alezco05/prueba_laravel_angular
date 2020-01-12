import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import * as moment from "moment";
import { UserService } from "src/app/services/user.service";
import { Router} from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  today = new Date();
  countries: any = [];
  cities: any = [];
  form: FormGroup;
  min = moment('1910-01-02').format('YYYY-MM-DD');
  // tslint:disable-next-line: no-inferrable-types
  submitted: boolean = false;
  selected = false;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.makeForm();
    this.userService.getCountry().subscribe(
      resp => this.countries = resp,
      err => console.log(err)
    );
  }

  makeForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      cedula: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  click() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const date = moment(this.form.value.date).format('YYYY-MM-DD');
    const data = {
      nombre: this.form.value.name,
      apellidos: this.form.value.lastname,
      cedula: this.form.value.cedula,
      fechaNacimiento: date,
      pais: this.form.value.country.pais,
      ciudad: this.form.value.city
    };
    this.userService.addUser(data).subscribe(
      resp => this.router.navigate(['']),
      err => console.log(err)
    );
  }
  get f() {
    return this.form.controls;
  }
  selectOpt(e) {
    this.selected = true;
    this.form.controls.city.setValue('');
    this.userService.getCity().subscribe(
      resp => {
        this.cities = resp;
        this.cities = this.cities.filter(cit => cit.country === e.value.codigo);
        console.log(this.cities)
      },
      err => console.log(err)
    );
  }
}

