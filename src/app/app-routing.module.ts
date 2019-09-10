import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ContactusComponent } from './contactus.component';


const routes: Routes = [
  {path: 'company', loadChildren: './company/company.module#CompanyModule'},
  {path: 'person', loadChildren: './person/person.module#PersonModule'},

  {path : 'contactus', component:ContactusComponent},
  {path : '', redirectTo:'', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
