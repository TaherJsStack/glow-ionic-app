import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {


  transList: {
    type: 'income' | 'out',
    image: string,
    title: string,
    time: string,
    value: string,
  }[] = [
    {
      type: 'out',
      image: '',
      title: 'حجز صالون سوليتير',
      time: '11:09 ص | 11/7/2023',
      value: '175.00 -',
    },
    {
      type: 'income',
      image: '',
      title: 'استرداد قيمة الحجز',
      time: '11:09 ص | 11/7/2023',
      value: '175.00 +',
    },
    {
      type: 'income',
      image: 'assets/icons/user.svg',
      title: 'هدية من مروة',
      time: '11:09 ص | 11/7/2023',
      value: '175.00 +',
    },
    {
      type: 'out',
      image: '',
      title: 'حجز صالون سوليتير',
      time: '11:09 ص | 11/7/2023',
      value: '- 175.00',
    }
  ]


  constructor() { }

  ngOnInit() {}

}
