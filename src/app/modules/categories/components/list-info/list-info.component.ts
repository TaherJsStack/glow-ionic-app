import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-info',
  templateUrl: './list-info.component.html',
  styleUrls: ['./list-info.component.scss'],
})
export class ListInfoComponent implements OnInit {

  @Input() listInfo: {key: string, value: string}[] = []
  constructor() { }

  ngOnInit() {}

}
