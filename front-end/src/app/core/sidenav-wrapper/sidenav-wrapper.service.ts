import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavWrapperService {

  private readonly _state: BehaviorSubject<boolean> = new BehaviorSubject(false as boolean);
  public get state$() { return this._state.asObservable(); }

  public getState(): boolean {
    return this._state.getValue()
  }

  public toggleState(): void {
    const state = this.getState();    
    if (state) this.setClosed()
    else this.setOpen();
  }

  public setOpen(): void {
    this._state.next(true);
  }

  public setClosed(): void {
    this._state.next(false);
  }

  constructor() {
    
  }
}
