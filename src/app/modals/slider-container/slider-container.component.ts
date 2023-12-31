import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-slider-container',
  templateUrl: './slider-container.component.html',
  styleUrls: ['./slider-container.component.scss'],
})
export class SliderContainerComponent implements OnInit {
 @ViewChild('Slides', { static: true }) Slides: IonSlides;

 @Input() title: string;
 @Input() showTitle = true; // used hide title
 @Input() showMore = true;
//  @Input() viewBgColor = true; // used with to set background
 @Input() path: string;
 @Input() cardPathTo: string = '';
//  @Input() packagePathTo: string = '';
 @Input() type: string;
 @Input() pageType: string;
 @Input() isItemDetail = true; // to hide or show arrow in item
 @Input() isCategorySeeMore = false; // control category see more on slider on slider
 @Input() slidesPerView: number;
 @Input() slidesSpaceBetween: number;
 @Input() queryParams: { [key: string]: any };

 isSliderImages = false;

 slideOpts = {
   initialSlide: 0,
   slidesPerView: 4,
   spaceBetween: 22,
   speed: 400,
   loop: false,
   dir: '',
   autoplay: 1000,
 };

 mDataListLength: number;
 pageDir: string;

 windowWidth: number;

 @Input() set dataList(val) {
   if (val) {
     this.mDataList = val;
   }
 }

 get dataList() {
   if (this.mDataList) {
     this.mDataListLength = this.mDataList.length;
    //  if (this.mDataListLength > 0) {
    //    this.isSliderImages = true;
    //  }
     if (this.mDataListLength ) {
       return this.mDataList;
     }
   }

   return this.dummyArray;
 }

 dummyArray = [undefined, undefined, undefined, undefined, undefined];

 /**
  * Type of DataList
  * { productId: number; price: PriceMarket }[]
  * | Category[]
  * | undefined[]
  */
 private mDataList;

 constructor(private router: Router) {
   this.windowWidth = window.innerWidth;
 }

 ngOnInit() {
   this.getLang();
   this.slideOpts.dir = this.pageDir;
   this.slideOpts.spaceBetween = this.slidesSpaceBetween || 44;
   this.slideOpts.slidesPerView = this.slidesPerView || 4;
  //  this.Slides.update();
 }

 getLang() {
   const intervalSubscription = interval(200)
     .pipe(
       tap(() => {
         Storage.get({ key: 'lang' }).then((lang) => {
           if (lang.value !== null) {
             this.setDir(lang.value);
             intervalSubscription?.unsubscribe();
           }
         });
       })
     )
     .subscribe();
 }

 setDir(lang) {
   this.pageDir = lang === 'en' ? 'ltr' : 'rtl';
   this.slideOpts.dir = this.pageDir;
 }

 navigate() {
   this.router.navigate([this.path], {
     queryParams: this.queryParams,
   });
 }

}
