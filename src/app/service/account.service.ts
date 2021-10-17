import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getUser(user: User): Observable<any> {
    return this.http.post('http://localhost:8090/user', user);
  }

  postCustomerRegistration(user: User): Observable<any> {
    return this.http.post('http://localhost:8090/customer', user);
  }
}
