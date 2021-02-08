import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorSmallComponent } from './sensor-small.component';

describe('SensorSmallComponent', () => {
  let component: SensorSmallComponent;
  let fixture: ComponentFixture<SensorSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
