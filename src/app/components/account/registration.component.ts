import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../service/account.service';

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./account.component.css']
})
export class RegistrationComponent implements OnInit {
  title = 'New user registration';

  userForm: FormGroup;
  validMessage: string = "";

  constructor(private accountService: AccountService, private router: Router) { 
    this.userForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.validMessage = "";
      this.accountService.postCustomerRegistration(this.userForm.value).subscribe(
        () => this.router.navigateByUrl('/login'),        
        error => console.log('error: ', error)    
        // error => Observable.throw(error)
      );
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }
  }
}
