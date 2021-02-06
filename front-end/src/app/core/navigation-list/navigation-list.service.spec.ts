import { TestBed } from '@angular/core/testing';

import { NavigationListService } from './navigation-list.service';

describe('NavigationListService', () => {
  let service: NavigationListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
