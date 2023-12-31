import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ModalContentType } from 'src/app/shared/enums/modal-content-types.enum';
import { ContentModalService } from 'src/app/shared/services/content-modal.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {


  form: FormGroup;
  isSubmit: boolean = false;

  isHideCurrentPassword
  isHidePassword:boolean      = false;
  isHideconfPassword:boolean  = false;
  confPassword:boolean        = false;

  constructor(
    private formBuilder: FormBuilder,
    private contentModalService: ContentModalService,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    this.initform()
  }

  initform(){
    this.form = this.formBuilder.group({
      currentPassword:  new FormControl('',[Validators.required]),
      password:         new FormControl('',[Validators.required]),
      confPassword:     new FormControl('',[Validators.required]),
    });
  }

  onSubmit(){
    if (this.form.invalid) {
      this.isSubmit = true;
      return
    }
    this.showConfirmModal(this.translateService.instant('Modal.PasswordChangedSuccessfully'), '')
  }
 
  showConfirmModal(title, description) {
    this.contentModalService.onOpenContentModal({
      modalContentType: ModalContentType.Congrats,
      icon:'assets/icons/congrats.svg',
      title,
      description,
      confirmOnlyBtn: true,
      confirmOnlyBtnText: 'Ok',
      context: this,
    });
  }


}
