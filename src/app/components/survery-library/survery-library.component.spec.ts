import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveryLibraryComponent } from './survery-library.component';

describe('SurveryLibraryComponent', () => {
  let component: SurveryLibraryComponent;
  let fixture: ComponentFixture<SurveryLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveryLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveryLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
