import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit, AfterViewInit  {
  
  sendOTPAfter: number = 59;

  constructor() { }

  ngOnInit() { 
    let timeDone = setInterval(() => {
      this.sendOTPAfter--
      if (this.sendOTPAfter == 0) {
        clearInterval(timeDone)
      }
    }, 1000);
    


  }

  ngAfterViewInit() {}

  onOtpChange(e: any) {
    console.log(e)
  }


}
