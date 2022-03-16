import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class AlertMessageService {

  text = new EventEmitter<string>();
  isActivate = new EventEmitter<boolean>();

  constructor() { }

  enableMessage(){
    this.isActivate.emit(true);
  }

  disableMessage(){
    this.isActivate.emit(false);
  }

  setText(text: string){
    this.text.emit(text);
  }

}
