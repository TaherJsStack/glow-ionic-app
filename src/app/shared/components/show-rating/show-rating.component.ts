import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-rating',
  templateUrl: './show-rating.component.html',
  styleUrls: ['./show-rating.component.scss'],
})
export class ShowRatingComponent implements OnInit {

  @Input() rating: number;
  stars: number[];

  constructor() {
    this.stars = [1, 2, 3, 4, 5];
  }

  ngOnInit(): void {
      
  }

  isStarHighlighted(star: number): boolean {
    return star <= this.rating;
  }

}
