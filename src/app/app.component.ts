import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Storage } from '@capacitor/storage';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;

  constructor(
    private platform: Platform,
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document,

  ) { }

  async ngOnInit() {
    this.initializeApp();
  }

  initializeApp() {
    this.setDeviceLang()
  }

  /**
   * check user data to active user
   */
  checkUserData() {}

  setDeviceLang() {
    let useLang;
    Storage.get({ key: 'lang' }).then(async (lang) => {
      useLang =  lang.value;
      console.log('useLang -->', useLang)
      // if lang then ignore this cond
      if (!useLang) {
        // if (this.platform.is('cordova')) {
        //   await this.globalization
        //     .getPreferredLanguage()
        //     //  ex values : en-us
        //     .then((res) => {
        //       let mobLang = res.value.split('-')[0];
        //       /// handle if device has dutch ,french ...etc lang
        //       if (mobLang !== 'ar' && mobLang !== 'en') {
        //         mobLang = 'en';
        //       }
        //       useLang = mobLang;
        //       /// change app dir based on lang
        //     })
        //     .catch((e) => {});
        // }
      }
      if (!useLang) {
        useLang = 'en';
      }
      Storage.set({
        key: 'lang',
        value: useLang,
      }); // Save lang
      this.translate.use(useLang).subscribe(res=>{
        console.log(res)
      }); // Get lang file base on lang
      this.document.documentElement.dir = useLang == 'en' ? 'ltr' : 'rtl'; // Change app dire base on lang
      this.document.body.dir = useLang == 'en' ? 'ltr' : 'rtl'; // Change app dire base on lang
    });
  }

}
