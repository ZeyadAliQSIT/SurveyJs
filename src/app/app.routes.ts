import { Routes } from '@angular/router';
import { SurvayItComponent } from './components/survay-it/survay-it.component';
import { SurveryAnalyticsComponent } from './components/survery-analytics/survery-analytics.component';
import { SurveyCreatorComponent } from './components/survey-creator/survey-creator.component';
import { SurveryPdfComponent } from './components/survery-pdf/survery-pdf.component';
import { SurveryLibraryComponent } from './components/survery-library/survery-library.component';

export const routes: Routes = [
  {path: '', component: SurveryLibraryComponent},
  {path: 'Analytics', component: SurveryAnalyticsComponent},
  {path: 'Creator', component: SurveyCreatorComponent},
  {path: 'PDF', component: SurveryPdfComponent}



];
