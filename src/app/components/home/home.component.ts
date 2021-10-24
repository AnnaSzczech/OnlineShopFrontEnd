import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../../service/account.service';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {

  title = 'Demo';
  greeting: any = {id: 'XXX', content: 'Hello World'};

  constructor(private app: AccountService, private http: HttpClient) {
    http.get('/server/').subscribe(data => this.greeting = data);
  }

  authenticated() { return this.app.authenticated; }

}