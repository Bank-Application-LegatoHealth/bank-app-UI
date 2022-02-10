import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InvestorsComponent } from './investors/investors.component';
import { AdsComponent } from './ads/ads.component';
import { LogInComponent } from './log-in/log-in.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { TransferComponent } from './transfer/transfer.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

let routeConfig: Routes = [
{path : '' , component :},
{path : '' , component :},
{path : '' , component :},
{path : '' , component :},
{path : '' , component :},
{path : '' , component :},


]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    InvestorsComponent,
    AdsComponent,
    LogInComponent,
    AccountDetailsComponent,
    TransferComponent,
    TransactionDetailsComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
