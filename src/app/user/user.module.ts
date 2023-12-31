import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';

import { UserPage } from './user.page';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OtpComponent } from './otp/otp.component';
import { NewPasswordComponent } from './new-password/new-password.component';

import { NgOtpInputModule } from  'ng-otp-input';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    UserPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    SharedModule
  ],
  declarations: [
    UserPage,
    LoginComponent,
    RegisterComponent,
    OtpComponent,
    NewPasswordComponent
  ]
})
export class UserPageModule {}
