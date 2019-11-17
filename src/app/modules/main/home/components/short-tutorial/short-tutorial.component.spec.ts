import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortTutorialComponent } from './short-tutorial.component';

describe('ShortTutorialComponent', () => {
  let component: ShortTutorialComponent;
  let fixture: ComponentFixture<ShortTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
