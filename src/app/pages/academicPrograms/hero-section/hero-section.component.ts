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
      current: 'البرامج الأكاديمية'
    },
    title: 'البرامج الأكاديمية',
    subtitle: 'اكتشف برامجنا المتنوعة في العلوم الطبيعية والرياضية',
    description: 'نقدم مجموعة شاملة من البرامج الأكاديمية المعتمدة دولياً في مختلف التخصصات العلمية'
  };

}
