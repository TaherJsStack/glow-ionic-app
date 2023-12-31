import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'discover',
      },
      {
        path: 'discover',
        loadChildren: () => import('../pages/discover/discover.module').then((m) => m.DiscoverPageModule),
      },
      {
        path: 'reservations',
        loadChildren: () => import('../pages/reservations/reservations.module').then((m) => m.ReservationsPageModule),
      },
      {
        path: 'offers',
        loadChildren: () => import('../pages/offers/offers.module').then((m) => m.OffersPageModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then((m) => m.ProfilePageModule),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
