import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {

  list: {image: string, icon:string, title: string, location: string, rate: number }[]=[
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5.0 },
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5.0 },
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5.0 },
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5.0 },
  ]
  
  constructor() { }

  ngOnInit() {}


}
