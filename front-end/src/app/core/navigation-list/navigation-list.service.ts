import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INavigationListItem } from './navigation-list.model';

const TEST_DATA: INavigationListItem[] = [
  { url: 'live-map', displayName: 'Live Map', icon: 'map' },
  { url: 'sensors', displayName: 'Sensors', icon: 'sensors' },
  { url: 'admin', displayName: 'Administration', icon: 'build', disabled: true }
]

@Injectable({
  providedIn: 'root'
})
export class NavigationListService {

  private readonly _navigationItems: BehaviorSubject<INavigationListItem[]> = new BehaviorSubject(TEST_DATA as INavigationListItem[]);
  public navigationItems$ = this._navigationItems.asObservable();

  constructor() { }
}
