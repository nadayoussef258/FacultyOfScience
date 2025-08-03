import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

  heroData = {
    breadcrumb: {
      home: 'الرئيسية',
      current: 'عن الكلية'
    },
    title: 'عن الكلية',
    subtitle: 'تعرف على كلية العلوم جامعة أسوان ورؤيتها ورسالتها'
  };

}
