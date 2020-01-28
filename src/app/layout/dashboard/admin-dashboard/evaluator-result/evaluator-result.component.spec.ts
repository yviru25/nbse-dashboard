import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatorResultComponent } from './evaluator-result.component';

describe('EvaluatorResultComponent', () => {
  let component: EvaluatorResultComponent;
  let fixture: ComponentFixture<EvaluatorResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluatorResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatorResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
