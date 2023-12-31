import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salon-details',
  templateUrl: './salon-details.component.html',
  styleUrls: ['./salon-details.component.scss'],
})
export class SalonDetailsComponent implements OnInit {

  selectedSegment: string = 'Aboutus';

  specialist: {image: string, name: string, job: string}[] = [
    {image: 'assets/images/specialist.svg', name: 'راندا', job: 'اخصائي تجميل'},
    {image: 'assets/images/specialist.svg', name: 'راندا', job: 'اخصائي تجميل'},
    {image: 'assets/images/specialist.svg', name: 'راندا', job: 'اخصائي تجميل'},
    {image: 'assets/images/specialist.svg', name: 'راندا', job: 'اخصائي تجميل'},
    {image: 'assets/images/specialist.svg', name: 'راندا', job: 'اخصائي تجميل'},
  ]

  serviceList: {icon: string, title: string, availableService: string, selected: boolean}[] = [
    {icon: 'assets/icons/services/service1.svg', title: 'العناية بالبشرة', availableService: 'لدينا (15) خدمة متاحة', selected: true},
    {icon: 'assets/icons/services/service2.svg', title: 'باديكير', availableService: 'لدينا (15) خدمة متاحة',  selected: false},
    {icon: 'assets/icons/services/service3.svg', title: 'واكس', availableService: 'لدينا (15) خدمة متاحة',     selected: false},
    {icon: 'assets/icons/services/service4.svg', title: 'قص شعر', availableService: 'لدينا (15) خدمة متاحة',   selected: false},
    {icon: 'assets/icons/services/service5.svg', title: 'ميكياج', availableService: 'لدينا (15) خدمة متاحة',   selected: false},
  ]

  offersList: {image: string, title: string, description: string, price: number, selected: boolean}[] = [
    {
      image: 'assets/icons/offers/offer1.svg', 
      title: 'باكدج ليلة الزفاف', 
      description:'هناك العديد من الأشكال المتاحة لنصوص لوريم إيبسوم', 
      price: 500,
      selected: true
    },
    {
      image: 'assets/icons/offers/offer2.svg', 
      title: 'عرض الواكس', 
      description:'هناك العديد من الأشكال المتاحة لنصوص لوريم إيبسوم', 
      price: 500,
      selected: false
    },
    {
      image: 'assets/icons/offers/offer3.svg', 
      title: 'عرض الفيشل كريم', 
      description:'هناك العديد من الأشكال المتاحة لنصوص لوريم إيبسوم', 
      price: 500,
      selected: false
    },
    {
      image: 'assets/icons/offers/offer4.svg', 
      title: 'عرض العناية بالأظافر', 
      description:'هناك العديد من الأشكال المتاحة لنصوص لوريم إيبسوم', 
      price: 500,
      selected: true
    },
  ]

  
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

  isSelectedService:  boolean = false
  activeBookBTN:      boolean = false

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.activeBookBTN = true;
    }, 5000);
  }

}
