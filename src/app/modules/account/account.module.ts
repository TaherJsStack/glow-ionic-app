import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPageRoutingModule } from './account-routing.module';

import { ChangePasswordComponent } from './change-password/change-password.component';
import { CurrencyComponent } from './currency/currency.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { LanguageComponent } from './language/language.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { WalletComponent } from './wallet/wallet.component';
import { SharedModule } from '../../shared/shared.module';
import { TransformComponent } from './transform/transform.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule,
    SharedModule
  ],
  declarations: [
    ChangePasswordComponent,
    CurrencyComponent,
    EditProfileComponent,
    FavouritesComponent,
    LanguageComponent,
    PaymentGatewayComponent,
    PrivacyComponent,
    WalletComponent,
    TransformComponent
  ]
})
export class AccountPageModule {}
