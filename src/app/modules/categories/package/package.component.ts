import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss'],
})
export class PackageComponent implements OnInit {

  // @Input() packagePathTo: string = ''
  packagePathTo: string ='';
  queryParams: {};
  resultType: string = '';
  offersList: {image: string, title: string, description: string, price: number}[] = [
    {
      image: 'assets/icons/services2/services1.svg', 
      title: 'قص عادي', 
      description:'مرات الحجز (150) ', 
      price: 50
    },
    {
      image: 'assets/icons/services2/services2.svg', 
      title: 'تصفيف شعر', 
      description:'مرات الحجز (150) ', 
      price: 60
    },
    {
      image: 'assets/icons/services2/services3.svg', 
      title: 'كيرياتين للشعر', 
      description:'مرات الحجز (150) ', 
      price: 50
    },
    {
      image: 'assets/icons/services2/services4.svg', 
      title: 'صبغة شعر', 
      description:'مرات الحجز (150) ', 
      price: 60
    },
  ]

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log('packagePathTo -->', this.packagePathTo)
    this.activatedroute.queryParams
    .subscribe(params => {
      console.log('queryParams -->', params); // { order: "popular" }
      this.queryParams = params;
      console.log('this.queryParams -->', this.queryParams); // { order: "popular" }

    }
  );
    this.getparamMap()
  }

  // services offers

  getparamMap(){
    this.activatedroute.params.subscribe(res => { 
      console.log('res   => ', res)
    })
    this.activatedroute.paramMap.subscribe(paramMap => { 
      this.resultType = paramMap.get('type')
    });
  }

  bookingFn() {

    console.log('this.queryParams -->', this.queryParams['openBooking'])
    console.log('this.queryParams -->', history.forward())
    
    if (this.queryParams['openBooking']) {
      this.packagePathTo = '/categories/booking/55'
    } else {
      this.packagePathTo = '/categories/salon/type';
    }


    this.router.navigate([this.packagePathTo], {
      // queryParams: this.queryParams,
    });
  }


}
