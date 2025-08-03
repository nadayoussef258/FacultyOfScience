import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-choose-us',
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.css'
})
export class WhyChooseUsComponent {

  whyChooseData = {
    header: {
      subtitle: 'لماذا تختارنا',
      title: 'لماذا كلية العلوم أسوان؟',
      description: 'نحن نقدم تعليماً علمياً متميزاً يجمع بين الأصالة والمعاصرة، مع بيئة تعليمية محفزة للإبداع والابتكار'
    },
    
    features: [
      {
        icon: 'pi pi-shield',
        title: 'جودة التعليم',
        description: 'برامج أكاديمية معتمدة ومطورة وفقاً لأحدث المعايير الدولية'
      },
      {
        icon: 'pi pi-users',
        title: 'هيئة تدريس متميزة',
        description: 'أساتذة وخبراء في مختلف التخصصات العلمية'
      },
      {
        icon: 'pi pi-cog',
        title: 'مختبرات حديثة',
        description: 'مختبرات مجهزة بأحدث الأجهزة والتقنيات العلمية'
      },
      {
        icon: 'pi pi-trophy',
        title: 'فرص وظيفية',
        description: 'شراكات مع الشركات والمؤسسات لضمان فرص عمل للخريجين'
      }
    ],
    
    image: {
      src: 'assets/young-scientist-looking-through-microscope-laboratory-young-scientist-doing-some-research-kopie.jpg',
      alt: 'لماذا تختارنا'
    },
    
    floatingStats: [
      {
        icon: 'pi pi-graduation-cap',
        number: '2500+',
        label: 'طالب',
        class: 'stat-1'
      },
      {
        icon: 'pi pi-book',
        number: '8',
        label: 'أقسام علمية',
        class: 'stat-2'
      },
      {
        icon: 'pi pi-star',
        number: '25+',
        label: 'سنة خبرة',
        class: 'stat-3'
      }
    ]
  };

}
