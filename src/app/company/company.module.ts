import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyListComponent } from './company-list/company-list.component';



@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  declarations: [
    CompanyComponent,
    CompanyListComponent
  ],
})
export class CompanyModule {
  constructor(){
    console.log("Company Module Loaded....2 :: ")
  }
 }
