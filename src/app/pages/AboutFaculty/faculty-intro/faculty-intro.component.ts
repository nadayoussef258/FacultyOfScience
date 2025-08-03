import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faculty-intro',
  imports: [ButtonModule, CommonModule],
  templateUrl: './faculty-intro.component.html',
  styleUrl: './faculty-intro.component.css'
})
export class FacultyIntroComponent {

  // وظيفة فتح فيديو YouTube
  openVideo(): void {
    window.open('https://www.youtube.com/watch?v=h3pg8Ophdp0&ab_channel=%D8%AC%D9%8A%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7%D9%88%D8%AC%D8%BA%D8%B1%D8%A7%D9%81%D9%8A%D8%A7%D8%A7%D9%84%D8%B9%D8%B1%D8%A8', '_blank');
  }

  // وظيفة التمرير إلى قسم "لماذا علوم أسوان"
  scrollToWhySection(): void {
    const element = document.getElementById('why-aswan-science');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  introData = {
    subtitle: 'مرحباً بكم',
    title: {
      part1: 'نحن',
      highlight: 'كلية العلوم',
      part2: 'جامعة أسوان'
    },
    description: 'كلية العلوم بجامعة أسوان هي إحدى الكليات الرائدة في مجال التعليم العلمي والبحث العلمي في صعيد مصر. تأسست الكلية بهدف إعداد كوادر علمية متميزة قادرة على المساهمة في التنمية المستدامة والتقدم العلمي.',

    stats: [
      {
        number: '94%',
        label: 'معدل نجاح الطلاب'
      },
      {
        number: '85%',
        label: 'رضا أولياء الأمور'
      }
    ],

    buttons: [
      {
        label: 'تعرف على المزيد',
        icon: 'pi pi-arrow-left',
        iconPos: 'right' as 'right',
        type: 'primary'
      },
      {
        label: 'شاهد الفيديو',
        icon: 'pi pi-play',
        iconPos: 'left' as 'left',
        type: 'secondary'
      }
    ],

    image: {
      src: 'assets/science.jpg',
      alt: 'كلية العلوم'
    },

    floatingElements: [
      {
        icon: 'pi pi-users',
        text: '+2500 طالب',
        class: 'element-1'
      },
      {
        icon: 'pi pi-book',
        text: '8 أقسام علمية',
        class: 'element-2'
      },
      {
        icon: 'pi pi-star',
        text: 'معتمدة دولياً',
        class: 'element-3'
      }
    ]
  };

}
