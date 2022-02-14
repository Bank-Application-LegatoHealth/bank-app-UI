import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InvestorsComponent } from './investors/investors.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdsComponent } from './ads/ads.component';
import { LogInComponent } from './log-in/log-in.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { BankGuard } from './bank.guard';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { TransferComponent } from './transfer/transfer.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

let routeConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'investors', component: InvestorsComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'ads', component: AdsComponent },
  { path: 'login', component: LogInComponent },
  { path: 'getInfo', component: AccountDetailsComponent },
  { path: 'transDetails', component: TransactionDetailsComponent }, 
  { path: 'transfer', component: TransferComponent },
  { path: 'changePassword', component: ChangePasswordComponent }


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    AdsComponent,
    LogInComponent,
    InvestorsComponent,
    FooterComponent,
    HeaderComponent,
    TransactionDetailsComponent,
    TransferComponent,
    ChangePasswordComponent,
    AccountDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



