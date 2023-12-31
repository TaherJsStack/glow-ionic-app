import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangePasswordComponent } from './change-password/change-password.component';
import { CurrencyComponent } from './currency/currency.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { LanguageComponent } from './language/language.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { WalletComponent } from './wallet/wallet.component';
import { TransformComponent } from './transform/transform.component';

const routes: Routes = [
  {
    path: 'ChangePassword',
    component: ChangePasswordComponent
  },
  {
    path: 'Currency',
    component: CurrencyComponent
  },
  {
    path: 'EditProfile',
    component: EditProfileComponent
  },
  {
    path: 'Favourites',
    component: FavouritesComponent
  },
  {
    path: 'Language',
    component: LanguageComponent
  },
  {
    path: 'PaymentGateway',
    component: PaymentGatewayComponent
  },
  {
    path: 'Privacy',
    component: PrivacyComponent
  },
  {
    path: 'Wallet',
    component: WalletComponent
  },
  {
    path: 'Transform',
    component: TransformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPageRoutingModule {}
