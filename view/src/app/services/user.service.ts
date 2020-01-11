import { Injectable } from '@angular/core';
// Http
import {HttpClient} from '@angular/common/http'
// Modelo
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get<any>('http://localhost:8000/api');
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
}
