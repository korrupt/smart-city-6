import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface IContainer {
  id: number;
  location: string;
  name: string;
  wasteType: string;
  updated: string;
  created: string;
  // sensor?: ISensor;
}

export const TEST_CONTAINERS: IContainer[] = [
  { id: 1, location: '63.408262180129725, 10.470540968379266', name: 'Patient Zero', wasteType: 'Pesten', created: '', updated: '' }
]

@Injectable({
  providedIn: 'root'
})
export class ContainerModelService {

  private _containers: BehaviorSubject<IContainer[]> = new BehaviorSubject(TEST_CONTAINERS as IContainer[])
  public get containers$(){ return this._containers.asObservable() }

  constructor() { }
}
