import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ModalFormType } from 'src/app/shared/enums/modal-form-types.enum';
import { FormModalService } from '../../../shared/services/form-modal.service';

@Component({
  selector: 'app-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.scss'],
})
export class TransformComponent implements OnInit {

  numList = ['1','2','3','4','5','6','7','8','9']

  inputValue: string = '';

  constructor(
    private formModalService: FormModalService,
    private translateService: TranslateService

  ) { }

  ngOnInit() {}

  onClickNumberButton(num: string){
    this.inputValue += num
  }

  removeLastNumber() {
    this.inputValue = this.inputValue.slice(0, -1);
  }

  async onSubmit() {
    let CancelButtonForm = await this.showFromModal(
      ModalFormType.Gift,
      this.translateService.instant('Modal.SendMoney'),
      this.translateService.instant('Modal.AddRecipientDetails')
      );
    console.log('CancelButtonForm -->', CancelButtonForm)
  }

  async showFromModal(formType, title, description): Promise<boolean> {
    const modal = await this.formModalService.onOpenFormModal({
      formType,
      icon: '',
      title,
      description,
      actionBtn: true,
      confirmOnlyBtn: false,
      actionBtnText: this.translateService.instant('Buttons.Save'),
      confirmOnlyBtnText: '',
      cssClass: 'backdropDismissModal'
    });
    const { data } = await modal.onWillDismiss();
    console.log('data -->', data)
    return data;
  }

}
