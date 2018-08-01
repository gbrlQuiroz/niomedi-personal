import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionesVidaComponent } from './condiciones-vida.component';

describe('CondicionesVidaComponent', () => {
  let component: CondicionesVidaComponent;
  let fixture: ComponentFixture<CondicionesVidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondicionesVidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionesVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
