import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvayItComponent } from './survay-it.component';

describe('SurvayItComponent', () => {
  let component: SurvayItComponent;
  let fixture: ComponentFixture<SurvayItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurvayItComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurvayItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
