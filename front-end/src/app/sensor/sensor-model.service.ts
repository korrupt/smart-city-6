import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISensor } from './sensor.model';

const TEST_DATA: ISensor[] = [
  { sensorId: 1, name: 'Sensor 1', containerId: undefined },
  { sensorId: 2, name: 'Sensor 2', containerId: undefined },
  { sensorId: 3, name: 'Sensor 3', containerId: undefined },
  { sensorId: 4, name: 'Sensor 4', containerId: undefined },
]

@Injectable({
  providedIn: 'root'
})
export class SensorModelService {

  private readonly _sensors: BehaviorSubject<ISensor[]> = new BehaviorSubject(TEST_DATA as ISensor[]);
  public allSensors$ = this._sensors.asObservable();

  constructor() { }
}
