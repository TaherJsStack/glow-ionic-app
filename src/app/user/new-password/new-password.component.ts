import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalContentType } from 'src/app/shared/enums/modal-content-types.enum';

import { ContentModalService } from 'src/app/shared/services/content-modal.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
})
export class NewPasswordComponent implements OnInit {

  form: FormGroup;
  isSubmit: boolean = false;

  isHidePassword = false;
  isHideconfPassword = false;
  confPassword = false;

  constructor(
    private formBuilder:          FormBuilder,
    private contentModalService:  ContentModalService,
    private translateService:     TranslateService
  ) { }

  ngOnInit() {
    this.initform()
  }

  initform(){
    this.form = this.formBuilder.group({
      password:     new FormControl('',[Validators.required]),
      confPassword: new FormControl('',[Validators.required]),
    });
  }

  async onSubmit(){
    if (this.form.invalid) {
      this.isSubmit = true;
      return
    }
    let modal = await this.showConfirmModal(
      this.translateService.instant('Modal.AccountCreatedSuccessfully'),
      this.translateService.instant('Modal.CongratulationsStartReservationsNow')
      )
    console.log('modal -->', modal)
  }
 
  showConfirmModal(title, description) {
    this.contentModalService.onOpenContentModal({
      modalContentType: ModalContentType.Congrats,
      icon:'../../../assets/icons/congrats.svg',
      title,
      description,
      confirmOnlyBtn: true,
      confirmOnlyBtnText: this.translateService.instant('Buttons.Ok'),
      context: this,
      cssClass: 'backdropDismissModal'
    });
  }

}
