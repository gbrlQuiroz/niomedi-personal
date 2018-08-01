import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactosEmergenciaComponent } from './contactos-emergencia.component';

describe('ContactosEmergenciaComponent', () => {
  let component: ContactosEmergenciaComponent;
  let fixture: ComponentFixture<ContactosEmergenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactosEmergenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactosEmergenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
