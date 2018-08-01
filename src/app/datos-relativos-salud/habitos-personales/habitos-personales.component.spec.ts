import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitosPersonalesComponent } from './habitos-personales.component';

describe('HabitosPersonalesComponent', () => {
  let component: HabitosPersonalesComponent;
  let fixture: ComponentFixture<HabitosPersonalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitosPersonalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitosPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
