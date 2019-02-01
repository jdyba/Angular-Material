import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSchemaComponent } from './form-schema.component';

describe('FormSchemaComponent', () => {
  let component: FormSchemaComponent;
  let fixture: ComponentFixture<FormSchemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSchemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
