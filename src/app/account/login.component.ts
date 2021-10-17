import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';
import { AccountService } from '../service/account.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./account.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Please sign in';
  user: User = {
    login: "",
    password: "",
    name: "",
    surname: "",
    city: ""
  };

  ngOnInit(): void {}

  constructor(private accountService: AccountService) { }

  onSubmit(form: NgForm) {
    console.log('in submit: ', form.value);
    this.accountService.getUser(this.user).subscribe(
        result => console.log('sucess: ', result),
        error => console.log('sucess: ', error),
    );
  }

}
