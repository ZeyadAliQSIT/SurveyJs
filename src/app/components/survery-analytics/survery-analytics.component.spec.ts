import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveryAnalyticsComponent } from './survery-analytics.component';

describe('SurveryAnalyticsComponent', () => {
  let component: SurveryAnalyticsComponent;
  let fixture: ComponentFixture<SurveryAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveryAnalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveryAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
