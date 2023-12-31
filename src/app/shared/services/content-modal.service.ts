import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContentModalComponent } from 'src/app/modals/content-modal/content-modal.component';
import { ContentModalInterface } from 'src/app/model/contentModal.model';

@Injectable({
  providedIn: 'root'
})
export class ContentModalService {

  constructor(private modalController: ModalController) {}

  async onOpenContentModal(
    options: ContentModalInterface
  ): Promise<HTMLIonModalElement> {
    const modal = await this.modalController.create({
      component: ContentModalComponent,
      cssClass: `onOpenModal ${options.cssClass}`,
      componentProps: options,
      backdropDismiss: true,
    });
    await modal.present();
    return modal;
  }
}
