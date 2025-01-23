import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveryPdfComponent } from './survery-pdf.component';

describe('SurveryPdfComponent', () => {
  let component: SurveryPdfComponent;
  let fixture: ComponentFixture<SurveryPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveryPdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveryPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
