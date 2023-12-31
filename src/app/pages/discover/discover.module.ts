import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscoverPageRoutingModule } from './discover-routing.module';

import { DiscoverPage } from './discover.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterComponent } from './filter/filter.component';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverPageRoutingModule,
    SharedModule
  ],
  declarations: [
    DiscoverPage,
    FilterComponent,
    NotificationComponent,
  ]
})
export class DiscoverPageModule {}
