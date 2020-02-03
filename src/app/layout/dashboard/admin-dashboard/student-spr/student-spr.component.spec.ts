import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSprComponent } from './student-spr.component';

describe('StudentSprComponent', () => {
  let component: StudentSprComponent;
  let fixture: ComponentFixture<StudentSprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
