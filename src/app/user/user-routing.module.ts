import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserPage } from './user.page';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OtpComponent } from './otp/otp.component';
import { NewPasswordComponent } from './new-password/new-password.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'otp',
    component: OtpComponent,
  },
  {
    path: 'newPassword',
    component: NewPasswordComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
