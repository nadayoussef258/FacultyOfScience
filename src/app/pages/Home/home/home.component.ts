import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from '../heroSection/heroSection.component';
import { WhyScinceComponent } from '../whyScince/whyScince.component';
import { StudentActivitiesComponent } from '../student-activities/student-activities.component';
import { StudentReviewsComponent } from '../student-reviews/student-reviews.component';

@Component({
  selector: 'app-home',
  imports:[HeroSectionComponent,
    WhyScinceComponent,StudentActivitiesComponent, StudentReviewsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
