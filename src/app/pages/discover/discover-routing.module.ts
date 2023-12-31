import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverPage } from './discover.page';
import { FilterComponent } from './filter/filter.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  {
    path: '',
    component: DiscoverPage
  },
  {
    path: 'filter',
    component: FilterComponent
  },
  {
    path: 'notification',
    component: NotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverPageRoutingModule {}
