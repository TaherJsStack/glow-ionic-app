import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from './components/card/card.component';
import { EmptyContentComponent } from './components/empty-content/empty-content.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionComponent } from './components/section/section.component';
import { SliderComponent } from '../modals/slider/slider.component';
import { SliderContainerComponent } from '../modals/slider-container/slider-container.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { CurrencyTransformPipe } from './pips/currency-transform.pipe';
import { ShowRatingComponent } from './components/show-rating/show-rating.component';
import { FavoriteBtnComponent } from './components/favorite-btn/favorite-btn.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    EmptyContentComponent,
    SectionComponent,
    SliderComponent,
    SliderContainerComponent,
    PaymentMethodsComponent,
    CurrencyTransformPipe,
    ShowRatingComponent,
    FavoriteBtnComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
  exports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    HeaderComponent,
    CardComponent,
    EmptyContentComponent,
    SectionComponent,
    SliderComponent,
    SliderContainerComponent,
    PaymentMethodsComponent,
    CurrencyTransformPipe,
    ShowRatingComponent,
    FavoriteBtnComponent

  ],
  providers: [],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule {}
