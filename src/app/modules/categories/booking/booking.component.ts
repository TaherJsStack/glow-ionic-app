import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  specialist: {image: string, name: string, job: string}[] = [
    {image: 'assets/images/specialist.svg', name: 'راندا', job: 'اخصائي تجميل'},
    {image: 'assets/images/specialist.svg', name: 'راندا', job: 'اخصائي تجميل'},
    {image: 'assets/images/specialist.svg', name: 'راندا', job: 'اخصائي تجميل'},
    {image: 'assets/images/specialist.svg', name: 'راندا', job: 'اخصائي تجميل'},
    {image: 'assets/images/specialist.svg', name: 'راندا', job: 'اخصائي تجميل'},
  ]

  countValue:number = 0

  constructor() { }

  ngOnInit() { }

  add(){}
  increment() {
    this.countValue++
  }
  decrement(){
    this.countValue--
  }

}
