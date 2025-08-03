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
      current: 'هيئة التدريس'
    },
    title: 'هيئة التدريس',
    subtitle: 'تعرف على أعضاء هيئة التدريس المتميزين',
    description: 'نخبة من الأساتذة والخبراء في مختلف التخصصات العلمية'
  };

}
