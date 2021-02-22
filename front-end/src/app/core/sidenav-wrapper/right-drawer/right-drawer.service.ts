import { ComponentType } from '@angular/cdk/portal';
import { ComponentRef, Injectable, InjectionToken, Injector } from '@angular/core';
import { ComponentPortal } from "@angular/cdk/portal";
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RightDrawerService {

  private readonly _state: BehaviorSubject<boolean> = new BehaviorSubject(false as boolean);
  public get state$() { return this._state.asObservable(); }

  public setOpen(): void {
    this._state.next(true)
  }

  public setClosed(): void {
    this._state.next(false);
  }

  public attachComponent<T>(comp: ComponentType<T>, injector?: Injector): Observable<T> {
    const portal = new ComponentPortal(comp, null, injector);
    this._activePortal.next(portal);
    return this._activePortalInstance.asObservable() as Observable<T>;
  }

  /** internal */
  public _activePortal: BehaviorSubject<ComponentPortal<any> | undefined> = new BehaviorSubject(undefined as ComponentPortal<any> | undefined);
  /** internal */
  public _activePortalInstance: BehaviorSubject<any | undefined> = new BehaviorSubject(undefined as any | undefined);

  constructor() {
  
  }
}
