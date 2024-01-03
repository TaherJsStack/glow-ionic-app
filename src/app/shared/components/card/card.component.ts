import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalFormType } from '../../enums/modal-form-types.enum';
import { FormModalService } from '../../services/form-modal.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

@Input() image:    string = ''
@Input() icon:     string = ''
@Input() title:    string = ''
@Input() location: string = ''
@Input() rate:     number = 5.0
@Input() offer:    number = 0
@Input() price:    number = 0
@Input() isHeart:  boolean = true;

@Input() cardPathTo: string = '';
// @Input() packagePathTo: string = '';
@Input() queryParams: { [key: string]: any };

  constructor(
    private router: Router,
    private formModalService: FormModalService,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    // console.log('CardComponent this.cardPathTo -->', this.cardPathTo)
    // console.log('CardComponent this.packagePathTo -->', this.queryParams)
    
  }

  navigate() {
     this.router.navigate([this.cardPathTo], {
       queryParams: this.queryParams,
     });
   }

   async showFromModal(): Promise<boolean> {
    event.stopPropagation();

    const modal = await this.formModalService.onOpenFormModal({
      formType: ModalFormType.Gift,
      icon: '',
      title: this.translateService.instant('Modal.SendAGift'),
      description: this.translateService.instant('Modal.AddRecipientDetails'),
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
