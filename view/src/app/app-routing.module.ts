import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { NewComponent } from './components/users/new/new.component';


const routes: Routes = [
  {path: '', component: UsersComponent, pathMatch: 'full'},
  {path: 'new-user', component: NewComponent},
  /*{path: 'private', component: PrivateTasksComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SignupComponent} */
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
