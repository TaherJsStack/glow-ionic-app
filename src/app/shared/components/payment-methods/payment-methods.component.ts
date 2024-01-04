import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ModalFormType } from '../../enums/modal-form-types.enum';
import { FormModalService } from '../../services/form-modal.service';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss'],
})
export class PaymentMethodsComponent implements OnInit {

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

  @Output() selectesCard = new EventEmitter<{}>()

  modalFormType = ModalFormType
  constructor(
    private formModalService: FormModalService,
    private translateService: TranslateService
  ) { }

  ngOnInit() {}

  trackItems(index: number, item: any) {
    return item.id;
  }

  handleChange(ev) {
    this.selectesCard.emit(ev.target.value)
  }

  async showFromModal(): Promise<boolean> {
    const modal = await this.formModalService.onOpenFormModal({
      formType: ModalFormType.AddCard,
      icon: '',
      title:         this.translateService.instant('Buttons.AddNewCard'),
      description:   this.translateService.instant('Modal.AddCardDetails'),
      actionBtnText: this.translateService.instant('Buttons.Save'), 
      confirmOnlyBtnText: '',
      actionBtn: true,
      cssClass: 'backdropDismissModal'
    });
    const { data } = await modal.onWillDismiss();
    console.log('data -->', data)
    return data;
  }
  
}
