import { TestBed } from '@angular/core/testing';

import { SidenavWrapperService } from './sidenav-wrapper.service';

describe('SidenavWrapperService', () => {
  let service: SidenavWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidenavWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
