import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-btn',
  templateUrl: './favorite-btn.component.html',
  styleUrls: ['./favorite-btn.component.scss'],
})
export class FavoriteBtnComponent implements OnInit {

  @Input() Id: string = '';

  @Input() isFavorite: boolean = true;

  constructor() { }

  ngOnInit() {}

  favoriteFn(){
    event.stopPropagation();
    this.isFavorite = !this.isFavorite
  }


}
