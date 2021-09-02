import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clase1ej1Component } from './clase1ej1.component';

describe('Clase1ej1Component', () => {
  let component: Clase1ej1Component;
  let fixture: ComponentFixture<Clase1ej1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clase1ej1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Clase1ej1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
