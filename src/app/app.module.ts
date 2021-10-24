import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/account/login.component';
import { RegistrationComponent } from './components/account/registration.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AccountService } from './service/account.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './service/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AccountService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
