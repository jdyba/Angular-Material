import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListElemComponent } from './list-elem.component';

describe('ListElemComponent', () => {
  let component: ListElemComponent;
  let fixture: ComponentFixture<ListElemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListElemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
