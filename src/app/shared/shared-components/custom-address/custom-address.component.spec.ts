import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAddressComponent } from './custom-address.component';

describe('CustomAddressComponent', () => {
  let component: CustomAddressComponent;
  let fixture: ComponentFixture<CustomAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
