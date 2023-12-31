import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {

  list: {image: string, icon:string, title: string, location: string, rate: number }[]=[
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5 },
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5 },
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5 },
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5 },
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5 },
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5 },
    {image: 'assets/icons/most-rate/rectangle.svg', icon:'assets/icons/most-rate/icon.svg', title: 'صالون سوليتير ', location: 'الرياض', rate: 5 },
  ]

  noResult: boolean = false
  
  resultType: string = ''

  constructor(
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getparamMap()
    setTimeout(() => {
      this.noResult = true
    }, 4000);
  }

  getparamMap(){
    this.activatedroute.paramMap.subscribe(paramMap => { 
      console.log('paramMap.get', paramMap.get('type')) 
      this.resultType = paramMap.get('type')
  });
  }

}
