import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SharedModule } from '../../shared/shared.module';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    SharedModule
  ],
  declarations: [
    SearchComponent,
    SearchResultComponent
  ]
})
export class SearchPageModule {}
