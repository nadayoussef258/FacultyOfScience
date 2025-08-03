import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vision-mission',
  imports: [CommonModule],
  templateUrl: './vision-mission.component.html',
  styleUrl: './vision-mission.component.css'
})
export class VisionMissionComponent {

  visionMissionData = {
    header: {
      subtitle: 'رؤيتنا ورسالتنا',
      title: 'منهجية عملنا',
      description: 'نسعى لتحقيق التميز في التعليم والبحث العلمي من خلال منهجية واضحة ومحددة'
    },

    processes: [
      {
        id: 'vision',
        number: '01',
        icon: 'pi pi-eye',
        title: 'الرؤية',
        description: 'أن تكون كلية العلوم بجامعة أسوان مؤسسة تعليمية وبحثية رائدة محلياً وإقليمياً في مجال العلوم الطبيعية والرياضية',
        class: 'vision'
      },
      {
        id: 'mission',
        number: '02',
        icon: 'pi pi-flag',
        title: 'الرسالة',
        description: 'تقديم تعليم علمي متميز وإجراء بحوث علمية تطبيقية تخدم المجتمع وتساهم في التنمية المستدامة',
        class: 'mission'
      },
      {
        id: 'goals',
        number: '03',
        icon: 'pi pi-target',
        title: 'الأهداف',
        description: 'إعداد خريجين مؤهلين علمياً ومهنياً قادرين على المنافسة في سوق العمل المحلي والإقليمي',
        class: 'goals'
      },
      {
        id: 'values',
        number: '04',
        icon: 'pi pi-heart',
        title: 'القيم',
        description: 'الالتزام بالتميز الأكاديمي والنزاهة العلمية والابتكار والمسؤولية المجتمعية',
        class: 'values'
      }
    ]
  };

}
