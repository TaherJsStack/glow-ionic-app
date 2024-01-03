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

    goToHome(){
      this.router.navigate(['/home'])
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
        console.log('isEnd -->', isEnd)
        // this.showSkip = !isEnd;
        // if (isEnd) {
        // }
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
