import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  // list: {image: string, icon:string, title: string, location: string, rate: number }[]=[
  //   {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5 },
  // ]

  list: {image: string, icon:string, title: string, location: string, price: number, offer:number}[]=[
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/best-offers.svg', title: 'عرض العناية بالأظافر', location: 'صالون لايدي ريد',  price: 500, offer:700 },
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
