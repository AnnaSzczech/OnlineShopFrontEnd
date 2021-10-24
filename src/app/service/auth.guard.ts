import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AccountService } from "./account.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private accountService: AccountService, private router: Router) {}

    canActivate() {
        if (this.accountService.authenticated) {
            return true;
        } else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}