import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ContactusComponent } from './contactus.component';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';


const routes: Routes = [
  {path: 'company', loadChildren: './company/company.module#CompanyModule', data: { preload : true}},
  {path: 'person', loadChildren: './person/person.module#PersonModule'},

  {path : 'contactus', component:ContactusComponent},
  {path : '', redirectTo:'', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {preloadingStrategy: CustomPreloadingStrategy})],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy]
})
export class AppRoutingModule { }
