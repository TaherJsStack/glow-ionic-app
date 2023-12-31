import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonType } from '../../enums/button-type.enum';

@Component({
  selector: 'app-package-card-info',
  templateUrl: './package-card-info.component.html',
  styleUrls: ['./package-card-info.component.scss'],
})
export class PackageCardInfoComponent implements OnInit {

  // @Input() cardInfoList: OfferModel [] = [];
  @Input() inputButtonType: ButtonType = ButtonType.Null
  @Input() isRate: Boolean = true;

  @Output() DeleteButton = new EventEmitter<{value:boolean, type: ButtonType}>()
  @Output() QrCodeButton = new EventEmitter<{value:boolean, type: ButtonType}>()

  buttonType = ButtonType;

  @Input() set cardInfoList(val) {
    console.log('val -->', val)
    if (val) {
      this.mDataList = val;
    }
  }
 
  get cardInfoList() {
    if (this.mDataList) {
      if (this.mDataList.length ){
        return this.mDataList;
      }
    }
 
    return this.dummyArray;
  }
 
  dummyArray = [undefined, undefined, undefined, undefined, undefined];
 
  private mDataList;

  constructor() { }

  ngOnInit() {
    console.log('cardInfoList -->', this.cardInfoList)
  }

  fnDeleteButton() {
    console.log('fnDeleteButton --->')
  }


}
