import { Component, Input, OnInit } from '@angular/core';
import { ISensor } from '../../sensor.model';

@Component({
  selector: 'app-sensor-small',
  templateUrl: './sensor-small.component.html',
  styleUrls: ['./sensor-small.component.scss']
})
export class SensorSmallComponent implements OnInit {

  @Input() sensor: ISensor | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
