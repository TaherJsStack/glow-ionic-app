import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

@Input() image:    string = ''
@Input() icon:     string = ''
@Input() title:    string = ''
@Input() location: string = ''
@Input() rate:     number = 5.0
@Input() offer:    number = 0
@Input() price:    number = 0
@Input() isHeart:  boolean = true;

@Input() cardPathTo: string = '';
// @Input() packagePathTo: string = '';
@Input() queryParams: { [key: string]: any };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // console.log('CardComponent this.cardPathTo -->', this.cardPathTo)
    // console.log('CardComponent this.packagePathTo -->', this.queryParams)
    
  }

  navigate() {
     this.router.navigate([this.cardPathTo], {
       queryParams: this.queryParams,
     });
   }

}
