import {Service, signal} from '@angular/core';

@Service()
export class EditGuard {
  guardEnabled=signal<boolean>(true)
  toggleGuard():void{
    this.guardEnabled.update(state=>!state)
  }
}
