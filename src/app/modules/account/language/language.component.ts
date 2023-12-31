import { Component, OnInit } from '@angular/core';

import { Storage } from '@capacitor/storage';
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {

  selectedLang: 'ar' | 'en' = 'ar'

  constructor( ) { }

  ngOnInit() { 
    Storage.get({ key: 'lang' }).then(async (lang) => {
      this.selectedLang = lang.value as 'ar' | 'en'
    })
  }

  handleChange(ev) {
    this.toggleLanguage(ev.target.value) 
  }

  toggleLanguage(val: string) {
    console.log('val')
    Storage.get({ key: 'lang' }).then(async (lang) => {
      await Storage.set({
        key: 'lang',
        // value: lang.value === 'ar' ? 'en' : 'ar',
        value: val,
      }).then((done) => {
        location.href = '/home/profile';
      });
    });
  }
}
