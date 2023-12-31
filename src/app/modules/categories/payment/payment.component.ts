import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OfferModel } from 'src/app/model/offer.model';
import { ModalContentType } from 'src/app/shared/enums/modal-content-types.enum';
import { ModalFormType } from 'src/app/shared/enums/modal-form-types.enum';
import { ContentModalService } from '../../../shared/services/content-modal.service';
import { FormModalService } from '../../../shared/services/form-modal.service';
import { ButtonType } from '../enums/button-type.enum';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  ButtonType    = ButtonType
  modalFormType = ModalFormType;

  offersList: OfferModel[] = [
    {
      image: 'assets/icons/offers/offer1.svg', 
      title: 'باكدج ليلة الزفاف', 
      description:'مرات الحجز (150) ', 
      rate: 5.0
    },
    {
      image: 'assets/icons/offers/offer1.svg', 
      title: 'باكدج ليلة الزفاف', 
      description:'مرات الحجز (150) ', 
      rate: 5.0
    }
  ]

  list = [
    {
      id: 1,
      name: 'المحفظة',
      info: '23,521.05 ر.س',
      icon: 'assets/icons/payment-methods/wallet.svg', 
      type: '1',
    },
    {
      id: 2,
      name: 'بطاقة ائتمان',
      info: '5689 4700 2589 9658',
      icon: 'assets/icons/payment-methods/mastercard.svg', 
      type: '2',
    },
    {
      id: 3,
      name: 'Paypal',
      icon: 'assets/icons/payment-methods/paypal.svg', 
      type: 'dessert',
    },
  ];

  listInfo: {key: string, value: string}[] = [
    {key: 'باكدج ليلة الزفاف', value:'1500.00 ر.س' },
    {key: 'الخصم', value:'20.00 ر.س' },
    {key: 'المبلغ المستحق', value:'1480.00 ر.س' }
  ]

  constructor(
    private contentModalService:  ContentModalService,
    private formModalService:     FormModalService,
    private translateService:     TranslateService
  ) { }

  ngOnInit() {}
  
  compareWith(o1, o2) {
    return o1.id === o2.id;
  }

  handleChange(ev) {
    console.log('Current value:', JSON.stringify(ev.target.value));
  }

  selectesCard(event){
    console.log('selectesCard', event)
  }

  async showFromModal(formType, title, description, actionBtnText, confirmOnlyBtnText): Promise<boolean> {
    const modal = await this.formModalService.onOpenFormModal({
      formType,
      icon: '',
      title,
      description,
      actionBtnText, 
      confirmOnlyBtnText,
      actionBtn: true,
    });
    const { data } = await modal.onWillDismiss();
    console.log('data -->', data)
    return data;
  }
  
  async showCongratsModal(title, description, icon: string = '') {
    const modal = await this.contentModalService.onOpenContentModal({
      modalContentType: ModalContentType.Congrats,
      icon,
      title,
      description,
      actionBtnText: this.translateService.instant('Buttons.Home'),
      context: this,
    });
    const { data } = await modal.onWillDismiss();

    // if (data.value ) {
    // }
    console.log('modal data -->', data)
    return data
  }


  async onPay() {
    let modal = await this.showCongratsModal(
      this.translateService.instant('Modal.PaymentReceivedSuccessfully'),
      this.translateService.instant('Modal.ReservationConfirmed'),
      '../../../../assets/icons/congrats.svg')    
    console.log('modal onPay -->', modal)
  }

}
