import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardStateType } from '../../enums/card-state-type.enum';

@Component({
  selector: 'app-reservations-card',
  templateUrl: './reservations-card.component.html',
  styleUrls: ['./reservations-card.component.scss'],
})
export class ReservationsCardComponent implements OnInit {
  
  @Input() cardStateType: CardStateType = CardStateType.Coming;
  @Input() isSingleBtn:   boolean = false;
  @Input() btnText:       string = '';
  @Input() activeBtnText: string = '';
  @Input() navigateUrl:   string = '';
  @Input() item:          {id: number, date: string, qrCode: string, name: string, location: string, rate: number} = {} as {id: number, date: string, qrCode: string, name: string, location: string, rate: number}
  
  @Output() actionButton  = new EventEmitter<{value:boolean, type: CardStateType}>()
  @Output() qrCodeButton  = new EventEmitter<{value:boolean, type: CardStateType}>()
  @Output() cancelButton  = new EventEmitter<{value:boolean, type: CardStateType}>()

  InputCardStateType = CardStateType;

  constructor() { }

  ngOnInit() {
    console.log('cardStateType -->', this.cardStateType)
    console.log('cardStateType boolen -->', this.cardStateType === this.InputCardStateType.Canceled)
  }



}
