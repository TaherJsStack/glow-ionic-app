import { Component, Input, EventEmitter,OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ButtonType } from '../enums/button-type.enum';
import { OfferModel } from '../../../model/offer.model';
import { ServiceModel } from 'src/app/model/service.model';
import { FormModalService } from 'src/app/shared/services/form-modal.service';
import { ModalContentType } from 'src/app/shared/enums/modal-content-types.enum';
import { ModalFormType } from 'src/app/shared/enums/modal-form-types.enum';
import { ContentModalService } from 'src/app/shared/services/content-modal.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss'],
})
export class BookingDetailsComponent implements OnInit {

  // @Output() emitCancelButtonFn    = new EventEmitter<boolean>()
  // @Output() emitQrCodeButtonBtnFn = new EventEmitter<boolean>()

  buttonType        = ButtonType;
  modalFormType     = ModalFormType;
  modalContentType  = ModalContentType;

  offersList: OfferModel[] = [
    {
      image: 'assets/icons/offers/offer1.svg', 
      title: 'باكدج ليلة الزفاف', 
      location: 'حي العارض  | الرياض',
      rate: 5.0
    }
  ]

  serviceList: ServiceModel[] = [
    {
      image: 'assets/icons/offers/offer1.svg', 
      title: 'باكدج ليلة الزفاف', 
      description:'مرات الحجز (150) ', 
      price: 50
    },
    {
      image: 'assets/icons/offers/offer1.svg', 
      title: 'قص عادي', 
      description:'مرات الحجز (150) ', 
      price: 70
    }
  ]

  listInfo: {key: string, value: string}[] = [
    {key: 'العميل', value:'نورا عبدالله' },
    {key: 'رقم الجوال', value:'(966) 515158236' },
    {key: 'التاريخ', value:'26 أبريل 2024 ' },
    {key: 'الوقت', value:'10:00 م' },
    {key: 'معرف الحجز', value:'22378965' }
  ]

  bookId: number = 0;
  
  constructor(
    private route:                ActivatedRoute,
    private formModalService:     FormModalService,
    private contentModalService:  ContentModalService,
    private translateService:     TranslateService
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.bookId = params['id']);
  }

  async onCancelButtonFn(event: {value:boolean, type: ButtonType}) {
    let CancelButtonForm = await this.showFromModal(
          ModalFormType.CancelOrder,
          this.translateService.instant('Buttons.Cancellation'), 
          this.translateService.instant('Modal.AreYouSureCancelReservation'), 
          );
    console.log('CancelButtonForm -->', CancelButtonForm)
  }

  onQrCodeButtonButtonFn(event: {value:boolean, type: ButtonType}){
    this.showContentModal(
      ModalContentType.Info,
      this.translateService.instant('Modal.StartBooking'),
      `${this.translateService.instant('Modal.ShowCodeToSpecialist')}
      <b>صالون سوليتير</b>
      ${this.translateService.instant('Modal.ToVerifyReservation')}`
    )
  }

  async showContentModal(modalContentType, title, description) {
    const modal = await this.contentModalService.onOpenContentModal({
      modalContentType,
      icon: 'assets/icons/QrCode-img.svg',
      title,
      description,
      actionBtnText: this.translateService.instant('Buttons.Home'),
      context: this,
      cssClass: 'backdropDismissModal'
    });
    console.log('modal -->', modal)
  }
  
  async showFromModal(formType, title, description): Promise<boolean> {
    const modal = await this.formModalService.onOpenFormModal({
      formType,
      icon: 'assets/icons/warning.svg',
      title,
      description,
      actionBtn: true,
      confirmOnlyBtn: true,
      actionBtnText: this.translateService.instant('Buttons.Sure'),
      confirmOnlyBtnText:  this.translateService.instant('Buttons.Close'),
      cssClass: 'backdropDismissModal'
    });
    const { data } = await modal.onWillDismiss();
    console.log('data -->', data)
    return data;
  }


}
