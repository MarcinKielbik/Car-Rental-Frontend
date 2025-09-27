import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './components/dashboard-user/dashboard-user.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'admin/dashboard', 
    component: DashboardAdminComponent, canActivate: [AuthGuard],
  data: { role: 'ADMIN' }
   },
  { path: 'user/dashboard', component: DashboardUserComponent,  canActivate: [AuthGuard],
  data: { role: 'USER' } },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
