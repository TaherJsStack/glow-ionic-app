import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { SalonDetailsComponent } from './salon-details/salon-details.component';
import { PackageComponent } from './package/package.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { RatingComponent } from './rating/rating.component';
import { FreelancerComponent } from './freelancer/freelancer.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full',
  // },
  {
    path: 'categories/:type',
    component: CategoriesComponent
  },
  {
    path: 'salon/:id',
    component: SalonDetailsComponent
  },
  {
    path: 'package/:type/:id',
    component: PackageComponent
  },
  {
    path: 'booking/:id',
    component: BookingComponent
  },
  {
    path: 'bookingDetails/:id',
    component: BookingDetailsComponent
  },
  {
    path: 'rating/:id',
    component: RatingComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'Freelancer',
    component: FreelancerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesPageRoutingModule {}
