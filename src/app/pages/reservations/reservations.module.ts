import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationsPageRoutingModule } from './reservations-routing.module';

import { ReservationsPage } from './reservations.page';
import { SharedModule } from '../../shared/shared.module';
import { ReservationsCardComponent } from './component/reservations-card/reservations-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationsPageRoutingModule,
    SharedModule
  ],
  declarations: [
    ReservationsPage,
    ReservationsCardComponent
  ]
})
export class ReservationsPageModule {}
