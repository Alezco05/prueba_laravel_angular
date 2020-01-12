import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import { User } from 'src/app/models/User';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user: User[];
  countries: any = [];
  cities: any = []
  selected = false;
  formulario = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    cedula: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
  });
   // tslint:disable-next-line: no-inferrable-types
   submitted: boolean = false;
  constructor(private userService: UserService,  private activatedRoute: ActivatedRoute, private router: Router, 
              private formBuilder: FormBuilder) {
                this.activatedRoute.params.subscribe(
                  params => this.getUserId(params.id)
                  );
               }
  ngOnInit() {
    this.fillForm();
    this.userService.getCountry().subscribe(
      resp => this.countries = resp,
      err => console.log(err)
    );
  }
   getUserId(id: number) {
    this.userService.getUser(id).subscribe(
      resp => {
        this.user = resp;
        this.fillForm();
      },
      err => console.log(err)
    );
  }
  fillForm() {
    if (this.user && this.formulario) {
      // tslint:disable: no-string-literal
      this.formulario.controls.name.setValue(this.user['nombre'].toString());
      this.formulario.controls.lastname.setValue(this.user['apellidos'].toString());
      this.formulario.controls.cedula.setValue(this.user['cedula']);
      this.formulario.controls.country.setValue(this.user['pais'].toString());
      this.formulario.controls.city.setValue(this.user['ciudad'].toString());
    }
  }
  borrarUsuario() {
    // tslint:disable-next-line: no-string-literal
    this.userService.removeUser(this.user['id']).subscribe(
      resp => this.router.navigate(['']),
      err => console.log(err)
    );
  }
  updateUser() {
    this.submitted = true;
    console.log(this.formulario);
    if (this.formulario.invalid) {
      return;
    }
    const date = moment(this.formulario.value.date).format('YYYY-MM-DD');
    let pais;
    if(this.formulario.value.country.pais === undefined) {
       pais = this.formulario.value.country;
    } else { pais = this.formulario.value.country.pais; }
    const data = {
      // tslint:disable-next-line: no-string-literal
      id: this.user['id'],
      nombre: this.formulario.value.name,
      apellidos: this.formulario.value.lastname,
      cedula: this.formulario.value.cedula,
      fechaNacimiento: date,
      pais,
      ciudad: this.formulario.value.city
    };
    this.userService.updateUser(data).subscribe(
      resp => this.router.navigate(['']),
      err => console.log(err)
    );
  }
  selectOpt(e) {
    this.selected = true;
    this.formulario.controls.city.setValue('');
    this.userService.getCity().subscribe(
      resp => {
        this.cities = resp;
        this.cities = this.cities.filter(cit => cit.country === e.value.codigo);
      },
      err => console.log(err)
    );
  }
}
