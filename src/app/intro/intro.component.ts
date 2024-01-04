import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  @ViewChild('slides', { static: true }) slides: IonSlides;

  slidList: {slidImagepath: string}[]= [
    {slidImagepath: 'assets/intro/slid1.svg'},
    {slidImagepath: 'assets/intro/slid2.svg'},
    {slidImagepath: 'assets/intro/slid3.svg'}
  ]
  indexCount = 0;

  slideOpts = {
    // initialSlide: 0,
    // slidesPerView: 1.2,
    // spaceBetween: 20,
    // slidesPerView: 'auto',
    // centeredSlides: true,
    // speed: 400,
    // loop: false,
    // dir: '',
    // autoplay: 1000,
  };
  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

    /**
     * @param event
     * get slide index number
     * highlight button number under slide
     */
    ionSlideTouchEnd(event){
      event.target.getActiveIndex().then(index => {
        if ((index+1) == this.slidList.length ) {
          this.indexCount++
          if (this.indexCount > 1) {
            this.goToHome()
          }
        } else {
          this.indexCount = 0
        }
      });
    }

    /**
     * got to next slide
     */
    isEndSlide:boolean = false;
    next() {
      if (this.isEndSlide) {
        this.goToHome()
      }
      this.slides.slideNext().then(index => {
        this.slides.isEnd().then(isEnd => {
            this.isEndSlide = isEnd
       })
      });
    }

    goToHome(){
      this.router.navigate(['/home'])
    }

}
