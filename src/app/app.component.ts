import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './service/account.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome page';

  greeting: any = {id: 'XXX', content: 'Hello World'};

  constructor(private accountService: AccountService, private http: HttpClient, private router: Router) {
    this.accountService.authenticate(undefined, undefined);
  }
  logout() {
    this.http.post('logout', {}).subscribe(() => {
        this.accountService.authenticated = false;
        this.router.navigateByUrl('/login');
    });
  }
}
