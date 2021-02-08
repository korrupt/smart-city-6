import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDividerComponent } from './section-divider.component';

describe('SectionDividerComponent', () => {
  let component: SectionDividerComponent;
  let fixture: ComponentFixture<SectionDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
