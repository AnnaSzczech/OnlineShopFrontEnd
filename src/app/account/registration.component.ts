import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';
import { AccountService } from '../service/account.service';

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./account.component.css']
})
export class RegistrationComponent implements OnInit {
  title = 'New user registration';

    user: User = {
        login: "",
        password: "",
        name: "",
        surname: "",
        city: ""
      };

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('in submit: ', form.valid);
    this.accountService.postCustomerRegistration(this.user).subscribe(
      result => console.log('sucess: ', result),
      error => console.log('sucess: ', error),
    );
  }

}
