import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { FacultyIntroComponent } from '../faculty-intro/faculty-intro.component';
import { VisionMissionComponent } from '../vision-mission/vision-mission.component';
import { WhyChooseUsComponent } from '../why-choose-us/why-choose-us.component';

@Component({
  selector: 'app-about-faculty-page',
  imports: [
    HeroSectionComponent,
    FacultyIntroComponent,
    VisionMissionComponent,
    WhyChooseUsComponent
  ],
  templateUrl: './about-faculty-page.component.html',
  styleUrl: './about-faculty-page.component.css'
})
export class AboutFacultyPageComponent {

}
