import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-content',
  templateUrl: './empty-content.component.html',
  styleUrls: ['./empty-content.component.scss'],
})
export class EmptyContentComponent implements OnInit {


  @Input() title: string = ''
  @Input() text:  string = ''
  @Input() icon:  string = ''

  constructor() { }

  ngOnInit() {}

}
