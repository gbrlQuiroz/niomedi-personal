import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementariosClinicosComponent } from './complementarios-clinicos.component';

describe('ComplementariosClinicosComponent', () => {
  let component: ComplementariosClinicosComponent;
  let fixture: ComponentFixture<ComplementariosClinicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplementariosClinicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplementariosClinicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
