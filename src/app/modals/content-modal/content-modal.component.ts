import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalContentType } from 'src/app/shared/enums/modal-content-types.enum';

@Component({
  selector: 'app-content-modal',
  templateUrl: './content-modal.component.html',
  styleUrls: ['./content-modal.component.scss'],
})
export class ContentModalComponent implements OnInit {

  @Input() modalContentType: ModalContentType;
  @Input() icon: string = 'assets/icons/congrats.svg';
  @Input() title: string = 'تم إنشاء حسابك بنجاح';
  @Input() description: string = ' تهانينا لقد تم إنشاء حسابك مع جلو ابدأ حجوزاتك من الآن!';

  @Input() confirmOnlyBtn: boolean;
  @Input() confirmOnlyBtnText: string;
  @Input() confirmOnlyBtnFunction: () => void;

  @Input() actionBtn: boolean;
  @Input() actionBtnText: string = 'متابعة';
  @Input() actionBtnColor: string;
  @Input() actionBtnFunction: () => void;

  @Input() cancelBtnTranslate: string;

  @Input() context: any;

  ModalContentType = ModalContentType
  
  listInfo: {key: string, value: string}[] = [
    {key: 'العميل',     value: 'نورا عبدالله'},
    {key: 'رقم الجوال', value: '(966) 515158236'},
    {key: 'معرف الحجز', value: '22378965'}
  ]

  constructor(
    private modalController: ModalController // private router: Router
  ) {}

  ngOnInit() {
    // console.log('this.context -->', this.context)
    // this.listInfo = this.context.listInfo
  }

  onAction() {
    if (this.actionBtnFunction) {
      const funcWithBindContext = this.actionBtnFunction.bind(this.context);
      funcWithBindContext();
    }
    this.modalController.dismiss(true);
  }

  onCloseModal() {
    /// if Callback func passed
    if (this.confirmOnlyBtnFunction) {
      const funcWithBindContext = this.confirmOnlyBtnFunction.bind(
        this.context
      );
      funcWithBindContext();
      this.modalController.dismiss(true);
      // this.router.navigate(['/']);
    } else {
      this.modalController.dismiss(false);
    }
  }

}
