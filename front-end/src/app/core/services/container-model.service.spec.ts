import { TestBed } from '@angular/core/testing';

import { ContainerModelService } from './container-model.service';

describe('ContainerModelService', () => {
  let service: ContainerModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContainerModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
