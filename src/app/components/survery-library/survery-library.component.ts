import { Component, Input, OnInit } from '@angular/core';
import { Model } from "survey-core";
import { SurveyModule } from 'survey-angular-ui';
import "survey-core/defaultV2.css";
@Component({
  selector: 'app-survery-library',
  imports: [ SurveyModule ],
  templateUrl: './survery-library.component.html',
  styleUrl: './survery-library.component.css'
})

export class SurveryLibraryComponent implements OnInit  {
  title = 'My First Survey';
  surveyJson = {
    elements: [{
      name: "FirstName",
      title: "Enter your first name:",
      type: "text"
    }, {
      name: "LastName",
      title: "Enter your last name:",
      type: "text"
    }]
  };
  surveyModel!: Model;
  alertResults (sender: Model) {
    const results = JSON.stringify(sender.data);
    alert(results);
    // saveSurveyResults(
    //   "https://your-web-service.com/" + SURVEY_ID,
    //   sender.data
    // )
  }
  ngOnInit() {
    const survey = new Model(this.surveyJson);
    survey.onComplete.add(this.alertResults);
    this.surveyModel = survey;
  }
}

