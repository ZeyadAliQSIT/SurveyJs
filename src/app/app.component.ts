import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SurvayItComponent } from "./components/survay-it/survay-it.component";
import { SurveyCreatorComponent } from "./components/survey-creator/survey-creator.component";
import { SurveryAnalyticsComponent } from "./components/survery-analytics/survery-analytics.component";
import { SurveryPdfComponent } from "./components/survery-pdf/survery-pdf.component";
import { SurveryLibraryComponent } from "./components/survery-library/survery-library.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SurvayItComponent, SurveyCreatorComponent, SurveryAnalyticsComponent, SurveryPdfComponent, SurveryLibraryComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Get Started with SurveyJS Form Library for Angular';
}
