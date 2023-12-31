import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {

  form: FormGroup;
  isSubmit: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initform()
  }

  initform(){
    this.form = this.formBuilder.group({
      name:    new FormControl('',[Validators.required]),
      email:   new FormControl('Nora@example.com',[Validators.required]),
      userName:new FormControl('@Nora.abdullah',[Validators.required]),
      phone:   new FormControl('(209) 555-0104',[Validators.required]),
      country: new FormControl('المملكة العربية السعودية',[Validators.required]),
      address: new FormControl('335  بن سالم، حي العارض، الرياض',[Validators.required]),
    });
  }

  onSubmit(){
    if (this.form.invalid) {
      this.isSubmit = true;
      return
    }
  }
 
}
