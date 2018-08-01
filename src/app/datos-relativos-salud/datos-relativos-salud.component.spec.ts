import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosRelativosSaludComponent } from './datos-relativos-salud.component';

describe('DatosRelativosSaludComponent', () => {
  let component: DatosRelativosSaludComponent;
  let fixture: ComponentFixture<DatosRelativosSaludComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosRelativosSaludComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosRelativosSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
