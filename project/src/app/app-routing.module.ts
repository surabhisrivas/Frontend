import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchLandingComponent } from './search-landing/search-landing.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'home',component:SearchComponent},
  {path : 'login',component:LoginComponent},
  {path : 'register' , component:RegisterComponent},
  {path : 'search-landing' , component:SearchLandingComponent},
  {path : '', redirectTo:'/home',pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
