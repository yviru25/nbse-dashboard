import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSchoolRsltComponent } from './view-school-rslt.component';

describe('ViewSchoolRsltComponent', () => {
  let component: ViewSchoolRsltComponent;
  let fixture: ComponentFixture<ViewSchoolRsltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSchoolRsltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSchoolRsltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
