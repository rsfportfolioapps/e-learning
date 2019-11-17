import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCourseComponent } from './start-course.component';

describe('StartCourseComponent', () => {
  let component: StartCourseComponent;
  let fixture: ComponentFixture<StartCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
