import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxSwitchComponent } from './checkbox-switch.component';

describe('CheckboxSwitchComponent', () => {
  let component: CheckboxSwitchComponent;
  let fixture: ComponentFixture<CheckboxSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
