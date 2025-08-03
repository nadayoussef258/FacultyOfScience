import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from './layout/footer/footer.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { HeroSectionComponent } from './pages/Home/heroSection/heroSection.component';
import { WhyScinceComponent } from './pages/Home/whyScince/whyScince.component';
import { StudentActivitiesComponent } from './pages/Home/student-activities/student-activities.component';
import { StudentReviewsComponent } from './pages/Home/student-reviews/student-reviews.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TopBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FacultyOfScience';
}
