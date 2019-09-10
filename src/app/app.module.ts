import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { CompanyModule } from './company/company.module';
//import { PersonModule } from './person/person.module';
import { AppRoutingModule } from './app-routing.module';
import { ContactusComponent } from './contactus.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    //CompanyModule,
    //PersonModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ContactusComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('App Module Loaded.... 1')
  }
 }
