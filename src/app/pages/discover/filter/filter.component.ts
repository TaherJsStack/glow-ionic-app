import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

  rangeUpper: number = 80;
  rangeLower: number = 20;

  constructor() { }

  ngOnInit() {}

  onIonChange(e: any){
    // console.log('onIonChange upper -->', e.detail.value.upper)
    // console.log('onIonChange lower -->', e.detail.value.lower)
    this.rangeUpper = e.detail.value.upper;
    this.rangeLower = e.detail.value.lower;
  }

}
