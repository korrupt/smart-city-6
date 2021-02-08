import { TestBed } from '@angular/core/testing';

import { SensorModelService } from './sensor-model.service';

describe('SensorModelService', () => {
  let service: SensorModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
