import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonType } from 'src/app/modules/categories/enums/button-type.enum';
import { ModalContentType } from 'src/app/shared/enums/modal-content-types.enum';
import { CardStateType } from './enums/card-state-type.enum';
import { ContentModalService } from '../../shared/services/content-modal.service';
import { ModalFormType } from 'src/app/shared/enums/modal-form-types.enum';
import { FormModalService } from '../../shared/services/form-modal.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
})
export class ReservationsPage implements OnInit {

  selectedSegment: CardStateType = CardStateType.Coming;
 
  cardStateType = CardStateType

  comingList: {id: number, date: string, qrCode: string, name: string, location: string, rate: number}[] = [
    {
      id: 22378965, 
      date: '26 أبريل 2024 - 10:00 م', 
      qrCode: 'assets/icons/QR-Code.svg', 
      name: 'صالون سوليتير ', 
      location: 'حي العارض  | الرياض', 
      rate: 5.0
    },
    {
      id: 22378965, 
      date: '26 أبريل 2024 - 10:00 م', 
      qrCode: 'assets/icons/QR-Code.svg', 
      name: 'صالون سوليتير ', 
      location: 'حي العارض  | الرياض', 
      rate: 5.0
    },
    {
      id: 22378965, 
      date: '26 أبريل 2024 - 10:00 م', 
      qrCode: 'assets/icons/QR-Code.svg', 
      name: 'صالون سوليتير ', 
      location: 'حي العارض  | الرياض', 
      rate: 5.0
    },
  ]

  constructor(
    private router:               Router,
    private formModalService:     FormModalService,
    private translateService:     TranslateService,
    private contentModalService:  ContentModalService,
  ) { }

  ngOnInit() {}

  actionButtonValue(event: {value: boolean, type: CardStateType} | any){
    console.log('event -->', event)
    switch (event.type) {
      case CardStateType.Coming:
      case CardStateType.Canceled:
        this.router.navigate(["/categories/bookingDetails/554555"], {
          queryParams: { id: 55455},
        });
        break;
        
      case CardStateType.Ending:
        this.router.navigate(["/categories/booking/554555"], {
          queryParams: { id: 55455},
        });
        break;
      case CardStateType.Canceled:
        // alert('Canceled')
        
        break;  
    
      default:
        break;
    }
  }

  async onCancelButtonFn(event: {value:boolean, type: CardStateType}) {    
    if (event.type == CardStateType.Coming) {
      let CancelButtonForm = await this.showFromModal(
          ModalFormType.CancelOrder, 
          this.translateService.instant('Buttons.Cancellation'), 
          this.translateService.instant('Modal.AreYouSureCancelReservation'),
          this.translateService.instant('Buttons.Sure'),
          this.translateService.instant('Buttons.Close')
          );
      console.log('CancelButtonForm -->', CancelButtonForm)
      
    } else if (event.type == CardStateType.Ending) {
      this.router.navigate(["/categories/rating/554555"], {
        queryParams: { id: 55455},
      });
    }
  }

  onQrCodeButtonButtonFn(event: {value:boolean, type: ButtonType} | any){
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
  
  async showFromModal(formType, title, description, actionBtnText, confirmOnlyBtnText): Promise<boolean> {
    const modal = await this.formModalService.onOpenFormModal({
      formType,
      icon: 'assets/icons/warning.svg',
      title,
      description,
      actionBtn: true,
      confirmOnlyBtn: true,
      actionBtnText,
      confirmOnlyBtnText,
      cssClass: 'backdropDismissModal'
    });
    const { data } = await modal.onWillDismiss();
    console.log('formModalService data -->', data)
    return data;
  }



}
