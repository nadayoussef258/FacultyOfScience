import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-programs-stats',
  imports: [CommonModule],
  templateUrl: './programs-stats.component.html',
  styleUrl: './programs-stats.component.css'
})
export class ProgramsStatsComponent {

  statsData = {
    header: {
      title: 'إحصائيات برامجنا الأكاديمية',
      description: 'أرقام تعكس تميز برامجنا الأكاديمية ونجاح خريجينا'
    },

    stats: [
      {
        number: '6',
        label: 'برامج أكاديمية',
        icon: 'pi pi-book',
        color: 'blue',
        description: 'برامج معتمدة ومتنوعة'
      },
      {
        number: '2500+',
        label: 'طالب مسجل',
        icon: 'pi pi-users',
        color: 'green',
        description: 'في جميع البرامج'
      },
      {
        number: '95%',
        label: 'معدل التوظيف',
        icon: 'pi pi-briefcase',
        color: 'orange',
        description: 'للخريجين خلال سنة'
      },
      {
        number: '144',
        label: 'ساعة معتمدة',
        icon: 'pi pi-clock',
        color: 'purple',
        description: 'لكل برنامج أكاديمي'
      },
      {
        number: '4',
        label: 'سنوات دراسية',
        icon: 'pi pi-calendar',
        color: 'teal',
        description: 'مدة البرنامج الأكاديمي'
      },
      {
        number: '85%',
        label: 'رضا الطلاب',
        icon: 'pi pi-star',
        color: 'yellow',
        description: 'عن جودة التعليم'
      }
    ]
  };

}
