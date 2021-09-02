import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clase1ej2Component } from './clase1ej2.component';

describe('Clase1ej2Component', () => {
  let component: Clase1ej2Component;
  let fixture: ComponentFixture<Clase1ej2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clase1ej2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Clase1ej2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
