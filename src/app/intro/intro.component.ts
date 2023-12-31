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
  nextSlideUrl: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}
  onSlideNextStart(event: any) {
    console.log('event.target.swiper -->', event.target.swiper)
    const nextSlideIndex = event.target.swiper.activeIndex + 1;
    const slides = event.target.slides;
    const nextSlide = slides[nextSlideIndex];
    const imgElement = nextSlide.querySelector('img');

    this.nextSlideUrl = imgElement.src;
  }
    /**
     * @param event
     * get slide index number
     * highlight button number under slide
     */
    ionSlideTouchEnd(event){
      event.target.getActiveIndex().then(index => {
        // this.activeIndex = 1+index;
      });
    }

    /**
     * @param index
     * opening slide o user click into stage
     */
    slideTo(index) {
      this.slides.slideTo(index-1);
      // this.activeIndex = index;
    }

    /**
     * @param event
     * hide skip button when last slider
     * change showSkip value
     */
    onSlideChangeStart(event) {
      event.target.isEnd().then(isEnd => {
        // this.showSkip = !isEnd;
        if (isEnd) {
          this.router.navigate(['/home'])
        }
      });
    }

    /**
     * got to next slide
     */
    next() {
      this.slides.slideNext();
    }

    /**
     * back to previous
     */
    prev() {
      this.slides.slidePrev();
    }
}
