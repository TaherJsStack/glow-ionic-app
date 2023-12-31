import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ModalFormType } from '../../shared/enums/modal-form-types.enum';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
})
export class FormModalComponent implements OnInit {

  @Input() formType: ModalFormType;
  @Input() icon: string;
  @Input() title: string;
  @Input() description: string;

  @Input() confirmOnlyBtn: boolean;
  @Input() confirmOnlyBtnText: string = 'confirmOnlyBtnText';
  @Input() confirmOnlyBtnFunction: () => void;

  @Input() actionBtn: boolean;
  @Input() actionBtnText: string = 'actionBtnText';
  @Input() actionBtnFunction: () => void;

  @Input() cancelBtnTranslate: string;

  @Input() context: any;

  form: FormGroup;
  inFormType = ModalFormType
  isSubmit: boolean = false;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    console.log('formType --->', this.formType)
    this.initForm()
  }

  onAction() {
    if (this.actionBtnFunction) {
      const funcWithBindContext = this.actionBtnFunction.bind(this.context);
      funcWithBindContext();
    }
    if (this.form.invalid) {
      this.isSubmit = true
      return
    }
    this.modalController.dismiss({value: true, form: this.form.value });
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

  initForm(){
   
    switch (this.formType) {
      case ModalFormType.Gift:
        this.form = this.formBuilder.group({
          name:  new FormControl('', [Validators.required]),
          phone: new FormControl('',[Validators.required]),
        });
        break;
      case ModalFormType.AddCard:
        this.form = this.formBuilder.group({
          placeholder:  new FormControl('', [Validators.required]),
          name:         new FormControl('', [Validators.required]),
          cvv:          new FormControl('', [Validators.required]),
          date:         new FormControl('', [Validators.required]),
        });
        break;
      case ModalFormType.Notes:
        this.form = this.formBuilder.group({
          rate:  new FormControl('', [Validators.required]),
          notes: new FormControl('',[Validators.required]),
        });
        break;
      case ModalFormType.CancelOrder:
        this.form = this.formBuilder.group({
          reason: new FormControl('', [Validators.required]),
          notes:  new FormControl('',[Validators.required]),
        });
        break;
    
      default:
        break;
    }

  }

  onSubmit(){ }


}
