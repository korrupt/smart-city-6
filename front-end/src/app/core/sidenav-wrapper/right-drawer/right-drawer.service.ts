import { ComponentType } from '@angular/cdk/portal';
import { ComponentRef, Injectable, InjectionToken, Injector } from '@angular/core';
import { ComponentPortal } from "@angular/cdk/portal";
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RightDrawerService {

  public attachComponent<T>(comp: ComponentType<T>, injector?: Injector): Observable<ComponentRef<T>> {
    const portal = new ComponentPortal(comp, null, injector);
    this._activePortal.next(portal);
    return this._activePortalInstance.asObservable() as Observable<ComponentRef<T>>;
  }

  /** internal */
  public _activePortal: BehaviorSubject<ComponentPortal<any> | undefined> = new BehaviorSubject(undefined as ComponentPortal<any> | undefined);
  /** internal */
  public _activePortalInstance: BehaviorSubject<ComponentRef<any> | undefined> = new BehaviorSubject(undefined as ComponentRef<any> | undefined);

  constructor() {
  
  }
}
