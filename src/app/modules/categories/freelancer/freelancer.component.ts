import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.scss'],
})
export class FreelancerComponent implements OnInit {

  selectedSegment: string = 'Aboutus';

  galleryList: {image: string}[] = [
    {image: 'assets/icons/gallery/gallery1.svg'},
    {image: 'assets/icons/gallery/gallery2.svg'},
    {image: 'assets/icons/gallery/gallery3.svg'},
    {image: 'assets/icons/gallery/gallery4.svg'},
    {image: 'assets/icons/gallery/gallery5.svg'},
    {image: 'assets/icons/gallery/gallery6.svg'},
    {image: 'assets/icons/gallery/gallery7.svg'},
    {image: 'assets/icons/gallery/gallery8.svg'},
    {image: 'assets/icons/gallery/gallery9.svg'},
    {image: 'assets/icons/gallery/gallery10.svg'},
    {image: 'assets/icons/gallery/gallery1.svg'},
    {image: 'assets/icons/gallery/gallery2.svg'},
  ]

  constructor() { }

  ngOnInit() {}

}
