import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  isSubmit: boolean = false
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.initform()
  }

  initform(){
    this.form = this.formBuilder.group({
      name:         new FormControl('Mohammed Ali', Validators.required),
      email:        new FormControl('Mohammed@example.com', [Validators.required]),
      phone:        new FormControl('(209) 555-0104', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.isSubmit = true;
      return
    }
  }
  
}
