import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() headerTitle: string = 'Header'
  @Input() forwardIcon: string = 'assets/icons/arrow-small-right_outline.svg'
  @Input() shareIcon: string = ''
  @Input() isBackButton: boolean = true


  constructor() { }

  ngOnInit() {
    console.log('HeaderComponent', this.headerTitle)
  }

}
