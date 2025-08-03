import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { NewsGridComponent } from '../news-grid/news-grid.component';

@Component({
  selector: 'app-news-page',
  imports: [HeroSectionComponent, NewsGridComponent],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css'
})
export class NewsPageComponent {

}
