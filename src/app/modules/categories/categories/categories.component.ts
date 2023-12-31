import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  list: {image: string, icon:string, title: string, location: string, rate: number }[]=[
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5 },
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5 },
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5 },
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5 },
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5 },
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5 },
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5 },
  ]

  OffersLessThan300List: {image: string, icon:string, title: string, location: string, price: number, offer: number }[]=[
    {image: 'assets/icons/best-offers-3.svg', icon:'assets/icons/best-offers.svg', title: 'عرض العناية بالبشرة', location: 'صالون لايدي ريد', price: 500, offer:700 },
    {image: 'assets/icons/best-offers-3.svg', icon:'assets/icons/best-offers.svg', title: 'عرض العناية بالبشرة', location: 'صالون لايدي ريد', price: 500, offer:700 },
    {image: 'assets/icons/best-offers-3.svg', icon:'assets/icons/best-offers.svg', title: 'عرض العناية بالبشرة', location: 'صالون لايدي ريد', price: 500, offer:700 },
    {image: 'assets/icons/best-offers-3.svg', icon:'assets/icons/best-offers.svg', title: 'عرض العناية بالبشرة', location: 'صالون لايدي ريد', price: 500, offer:700 },
    {image: 'assets/icons/best-offers-3.svg', icon:'assets/icons/best-offers.svg', title: 'عرض العناية بالبشرة', location: 'صالون لايدي ريد', price: 500, offer:700 },
  ]

  noResult: boolean = false
  resultType: string = ''

  selectedList: [] = []

  constructor(
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('CategoriesComponent -->')
    this.getparamMap()
    setTimeout(() => {
      this.noResult = true
    }, 4000);
  }

  getparamMap(){
    this.activatedroute.paramMap.subscribe(paramMap => { 
      console.log('CategoriesComponent paramMap.get', paramMap.get('type')) 
      this.resultType = paramMap.get('type')
    });
  }

}
