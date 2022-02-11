import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InvestorsComponent } from './investors/investors.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdsComponent } from './ads/ads.component';
import { LogInComponent } from './log-in/log-in.component';

let routeConfig: Routes = [
{path : '' , component : HomeComponent},
{path : 'aboutUs' , component : AboutUsComponent},
{path : 'investors' , component : InvestorsComponent},
{path : 'contactUs' , component : ContactUsComponent},
{path : 'ads' , component : AdsComponent},
{path : 'login' , component : LogInComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    AdsComponent,
    LogInComponent,
    InvestorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
