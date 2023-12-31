import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormModalInterface } from 'src/app/model/formModal.model';
import { FormModalComponent } from '../../modals/form-modal/form-modal.component';

@Injectable({
  providedIn: 'root'
})
export class FormModalService {

  constructor(private modalController: ModalController) {}

  async onOpenFormModal(
    options: FormModalInterface
  ): Promise<HTMLIonModalElement> {
    const modal = await this.modalController.create({
      component: FormModalComponent,
      cssClass: `onOpenModal ${ options.cssClass }`,
      componentProps: options,
    });
    await modal.present();
    return modal;
  }
  
}
