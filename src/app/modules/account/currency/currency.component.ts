import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {

  list = [
    {
      id: 1,
      name: 'العربية',
      icon: '../../../../assets/icons/flags/ksa.svg', 
      type: '1',
    },
    {
      id: 2,
      name: 'الإنجليزية',
      icon: '../../../../assets/icons/flags/usa.svg', 
      type: '2',
    }
  ];
  constructor() { }

  ngOnInit() {}

  handleChange(ev) {
    console.log('Current value:', JSON.stringify(ev.target.value));
    
  }

}
