import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { FacultyGridComponent } from '../faculty-grid/faculty-grid.component';

@Component({
  selector: 'app-faculty-page',
  imports: [HeroSectionComponent, FacultyGridComponent],
  templateUrl: './faculty-page.component.html',
  styleUrl: './faculty-page.component.css'
})
export class FacultyPageComponent {

}
