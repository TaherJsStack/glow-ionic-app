import { Component, OnInit } from '@angular/core';
import { LabelstModel } from 'src/app/model/labels.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  labelsList: LabelstModel[]=[
    {title: 'للرجال فقط', icon:'assets/icons/only-man.svg' },
    {title: 'قص شعر', icon:'assets/icons/cut.svg' },
    {title: 'باديكير', icon:'assets/icons/only-man.svg' },
    {title: 'للرجال فقط', icon:'assets/icons/only-man.svg' },
    {title: 'قص شعر', icon:'assets/icons/cut.svg' },
    {title: 'باديكير', icon:'assets/icons/only-man.svg' },
    {title: 'للرجال فقط', icon:'assets/icons/only-man.svg' },
    {title: 'قص شعر', icon:'assets/icons/cut.svg' },
    {title: 'باديكير', icon:'assets/icons/only-man.svg' },
  ]

  list: {image: string, icon:string, title: string, location: string, rate: number }[]=[
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5.0 },
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5.0 },
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5.0 },
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5.0 },
  ]

  bestOffersList: {image: string, icon:string, title: string, location: string, price: number, offer: number }[]=[
    {image: 'assets/icons/best-offers-image.svg', icon:'assets/icons/best-offers.svg', title: 'عرض العناية بالبشرة', location: 'صالون لايدي ريد',  price: 500, offer:700 },
    {image: 'assets/icons/best-offers-image.svg', icon:'assets/icons/best-offers.svg', title: 'عرض العناية بالبشرة', location: 'صالون لايدي ريد',  price: 500, offer:700 },
    {image: 'assets/icons/best-offers-image.svg', icon:'assets/icons/best-offers.svg', title: 'عرض العناية بالبشرة', location: 'صالون لايدي ريد',  price: 500, offer:700 },
    {image: 'assets/icons/best-offers-image.svg', icon:'assets/icons/best-offers.svg', title: 'عرض العناية بالبشرة', location: 'صالون لايدي ريد',  price: 500, offer:700 },
  ]

  OffersLessThan300List: {image: string, icon:string, title: string, location: string, price: number, offer: number }[]=[
    {image: 'assets/icons/best-offers-3.svg', icon:'assets/icons/best-offers.svg', title: 'عرض العناية بالبشرة', location: 'صالون لايدي ريد', price: 500, offer:700 },
    {image: 'assets/icons/best-offers-3.svg', icon:'assets/icons/best-offers.svg', title: 'عرض العناية بالبشرة', location: 'صالون لايدي ريد', price: 500, offer:700 },
    {image: 'assets/icons/best-offers-3.svg', icon:'assets/icons/best-offers.svg', title: 'عرض العناية بالبشرة', location: 'صالون لايدي ريد', price: 500, offer:700 },
    {image: 'assets/icons/best-offers-3.svg', icon:'assets/icons/best-offers.svg', title: 'عرض العناية بالبشرة', location: 'صالون لايدي ريد', price: 500, offer:700 },
    {image: 'assets/icons/best-offers-3.svg', icon:'assets/icons/best-offers.svg', title: 'عرض العناية بالبشرة', location: 'صالون لايدي ريد', price: 500, offer:700 },
  ]

  constructor() { }

  ngOnInit() {
  }

}
