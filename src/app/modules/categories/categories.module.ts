import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesPageRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { SharedModule } from '../../shared/shared.module';
import { SalonDetailsComponent } from './salon-details/salon-details.component';
import { PackageComponent } from './package/package.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { ListInfoComponent } from './components/list-info/list-info.component';
import { PackageCardInfoComponent } from './components/package-card-info/package-card-info.component';
import { RatingComponent } from './rating/rating.component';
import { FreelancerComponent } from './freelancer/freelancer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesPageRoutingModule,
    SharedModule
  ],
  declarations: [
    CategoriesComponent,
    SalonDetailsComponent,
    PackageComponent,
    BookingComponent,
    PaymentComponent,
    BookingDetailsComponent,
    ListInfoComponent,
    PackageCardInfoComponent,
    RatingComponent,
    FreelancerComponent
  ]
})
export class CategoriesPageModule {}
