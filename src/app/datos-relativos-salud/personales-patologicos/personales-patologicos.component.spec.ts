import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalesPatologicosComponent } from './personales-patologicos.component';

describe('PersonalesPatologicosComponent', () => {
  let component: PersonalesPatologicosComponent;
  let fixture: ComponentFixture<PersonalesPatologicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalesPatologicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalesPatologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
