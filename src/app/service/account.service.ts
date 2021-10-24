import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  authenticated = false;

  constructor(private http: HttpClient) { }
  
  authenticate(credentials: any, callback: any) {
    console.log('credentials ' + credentials);
    console.log('callback ' + callback);
    
    // const headers = new HttpHeaders(credentials ? {authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)} : {});
    // this.http.get('http://localhost:8090/user', {headers: headers}).subscribe(response => {

      this.getUser(credentials).subscribe(
        () => { 
          this.authenticated =  true;
          return callback && callback();
        },
        error => console.log('error: ', error)
        );
  }

  getUser(credentials: any) : Observable<any> {
    const headers = new HttpHeaders(credentials ? {authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)} : {});
    return this.http.get('/server/user', {headers: headers})
  }


  postCustomerRegistration(user: FormGroup): Observable<any> {
    let body = JSON.stringify(user);
    return this.http.post('/server/user', body, httpOptions);
  }
}
