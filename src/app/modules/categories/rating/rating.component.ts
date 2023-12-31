import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OfferModel } from 'src/app/model/offer.model';
import { ModalContentType } from 'src/app/shared/enums/modal-content-types.enum';
import { ContentModalService } from 'src/app/shared/services/content-modal.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {

  offersList: OfferModel[] = [
    {
      image: 'assets/icons/offers/offer1.svg', 
      title: 'باكدج ليلة الزفاف', 
      location: 'حي العارض  | الرياض',
      rate: 5.0
    }
  ]

  form: FormGroup;
  modalContentType = ModalContentType

  constructor(
    private router:               Router,
    private formBuilder:          FormBuilder,
    private translateService:     TranslateService,
    private contentModalService:  ContentModalService
  ) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.form = this.formBuilder.group({
      rate:  new FormControl('', [Validators.required]),
      notes: new FormControl('', [Validators.required]),
    });
  }

  onQrCodeButtonButtonFn(event: any) { }

  async saveBtn() {
    let modalRes = await this.showContentModal(
      ModalContentType.Thank, 
      this.translateService.instant('Modal.ThanksForYourFeedback'), 
      this.translateService.instant('Modal.YourEvaluation')
      )
    console.log('m -->', modalRes)
    if (modalRes) {
      this.cancelBtn()    
    }
  }
  cancelBtn() {
    this.router.navigate(['/home/reservations']);
  }

  async showContentModal(modalContentType, title, description) {
    const modal = await this.contentModalService.onOpenContentModal({
      modalContentType,
      icon: 'assets/icons/thanks-satr.svg',
      title,
      description,
      actionBtnText: this.translateService.instant('Buttons.Home'),
      context: this,
      cssClass: 'backdropDismissModal',
      backUrl: '/home/reservations',
      // actionBtnFunction: this.cancelBtn()
    });
    const { data } = await modal.onWillDismiss();

    console.log('thanks-satr modal -->', data)
    return data
  }

  onSubmit(){}
}
