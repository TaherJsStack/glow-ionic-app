import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  
  form: FormGroup;
  
  isSubmit:boolean = false;
  isHidePassword:boolean  = false;
  confPassword:boolean    = false;

  constructor(
    private formBuilder: FormBuilder,
    private platform: Platform,
    private router: Router
  ) { }

  ngOnInit() {
    this.initform();

    if (this.platform.is('cordova')) { }
  }

  initform(){
    this.form = this.formBuilder.group({
      phone:     new FormControl('', Validators.required),
      password:  new FormControl('', Validators.required),
    });
  }


/**
 * @param user form values
 * login user
 */
  onSubmit() {
    if (this.form.invalid) {
      this.isSubmit = true;
      return
    }
    this.router.navigateByUrl('/home');
  }

  changeFormState() {
    this.isSubmit = !this.isSubmit;
    console.log('changeFormState ===>' ,this.isSubmit);
  }


}
