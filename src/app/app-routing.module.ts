import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SingUPComponent } from './sing-up/sing-up.component';
import { authGuard } from './guards/auth.guard';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path:  'singup', component: SingUPComponent},
  {path: 'home', component: HomeComponent, canActivate: [authGuard]},
  {path: 'list', component: ListComponent, canActivate: [authGuard]},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
