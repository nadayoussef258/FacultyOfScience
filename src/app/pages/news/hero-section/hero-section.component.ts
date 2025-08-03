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
      current: 'الأخبار والفعاليات'
    },
    title: 'الأخبار والفعاليات',
    subtitle: 'تابع آخر أخبار وفعاليات كلية العلوم',
    description: 'اكتشف أحدث الأخبار والفعاليات والإنجازات في كلية العلوم جامعة أسوان'
  };

}
