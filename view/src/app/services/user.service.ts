import { Injectable } from '@angular/core';
// Http
import {HttpClient} from '@angular/common/http';
// Modelo
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get<User[]>('http://localhost:8000/api');
  }
  getCountry() {
    return this.http.get('/assets/county.json');
  }
  getCity() {
    return this.http.get('https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json');
  }
  getUser(id: number) {
    return this.http.get<User[]>('http://localhost:8000/api/' + id);
  }
  addUser(data: User) {
    return this.http.post('http://127.0.0.1:8000/api', data);
  }
  updateUser(data: User) {
    return this.http.put('http://127.0.0.1:8000/api/' + data.id , data);
  }
  removeUser(id: number) {
    return this.http.delete('http://127.0.0.1:8000/api/' + id);
  }
  ordernarUser(users: User[], tipo: string) {
  if (tipo === 'Nombre') {
      // tslint:disable-next-line: only-arrow-functions
      users.sort(function(a, b) {
        if (a.nombre > b.nombre) {
          return 1;
        }
        if (a.nombre < b.nombre) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    } else if (tipo === 'Cédula') {
      users.sort(function(a, b) {
        return a.cedula - b.cedula;
      });
    }    else if (tipo === "País") {
      users.sort(function(a, b) {
          if (a.pais > b.pais) {
            return 1;
          }
          if (a.pais < b.pais) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      }
      /*
      else if (tipo == "Valoraciones") {
        this.productos.sort(function(a, b) {
            return a.valoracion - b.valoracion;
          });
      } 
  }  */
}
}
