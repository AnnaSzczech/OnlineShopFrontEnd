import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../service/account.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./account.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Please sign in';
  credentials = {username: '', password: ''};

  ngOnInit(): void {}

  constructor(private accountService: AccountService, private router: Router) { }

  onSubmit(form: NgForm) {    
    this.accountService.authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
    });
    return false;
  }
}
