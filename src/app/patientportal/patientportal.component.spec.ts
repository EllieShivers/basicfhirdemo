import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientportalComponent } from './patientportal.component';

describe('PatientportalComponent', () => {
  let component: PatientportalComponent;
  let fixture: ComponentFixture<PatientportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
