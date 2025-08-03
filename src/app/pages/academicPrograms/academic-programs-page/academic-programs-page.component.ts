import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { ProgramsGridComponent } from '../programs-grid/programs-grid.component';
import { ProgramsStatsComponent } from '../programs-stats/programs-stats.component';

@Component({
  selector: 'app-academic-programs-page',
  imports: [
    HeroSectionComponent,
    ProgramsGridComponent,
    ProgramsStatsComponent
  ],
  templateUrl: './academic-programs-page.component.html',
  styleUrl: './academic-programs-page.component.css'
})
export class AcademicProgramsPageComponent {

}
