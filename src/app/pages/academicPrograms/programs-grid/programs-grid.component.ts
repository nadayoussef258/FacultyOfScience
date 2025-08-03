import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-programs-grid',
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './programs-grid.component.html',
  styleUrl: './programs-grid.component.css'
})
export class ProgramsGridComponent {

  programsData = {
    header: {
      subtitle: 'برامجنا الأكاديمية',
      title: 'اختر التخصص المناسب لك',
      description: 'نقدم مجموعة متنوعة من البرامج الأكاديمية المعتمدة في مختلف التخصصات العلمية'
    },

    programs: [
      {
        id: 1,
        title: 'الرياضيات',
        description: 'برنامج شامل في الرياضيات البحتة والتطبيقية مع التركيز على النظريات الحديثة والتطبيقات العملية',
        jobTitles: ['محلل بيانات', 'مطور خوارزميات', 'مدرس رياضيات'],
        icon: 'pi pi-calculator',
        color: 'blue',
        features: ['نظريات رياضية متقدمة', 'تطبيقات حاسوبية', 'إحصاء وتحليل البيانات'],
        image: 'assets/math.jpeg'
      },
      {
        id: 2,
        title: 'الفيزياء',
        description: 'دراسة شاملة للفيزياء النظرية والتطبيقية مع التركيز على الفيزياء الحديثة والتقنيات المتقدمة',
        jobTitles: ['فيزيائي طبي', 'مهندس ليزر', 'باحث فيزياء'],
        icon: 'pi pi-bolt',
        color: 'purple',
        features: ['فيزياء الكم', 'فيزياء الجسيمات', 'فيزياء الليزر'],
        image: 'assets/physics.jpg'
      },
      {
        id: 3,
        title: 'الكيمياء',
        description: 'برنامج متكامل في الكيمياء العضوية وغير العضوية والتحليلية مع التطبيقات الصناعية',
        jobTitles: ['كيميائي تحليلي', 'مطور أدوية', 'مهندس كيميائي'],
        icon: 'pi pi-circle',
        color: 'green',
        features: ['كيمياء عضوية', 'كيمياء تحليلية', 'كيمياء صناعية'],
        image: 'assets/chemist.jpg'
      },
      {
        id: 4,
        title: 'علوم الحاسوب',
        description: 'برنامج حديث في علوم الحاسوب والذكاء الاصطناعي مع التركيز على التطبيقات العملية',
        jobTitles: ['مطور برمجيات', 'مهندس ذكاء اصطناعي', 'خبير أمن سيبراني'],
        icon: 'pi pi-desktop',
        color: 'orange',
        features: ['برمجة متقدمة', 'ذكاء اصطناعي', 'أمن المعلومات'],
        image: 'assets/computer.jpg'
      },
      {
        id: 5,
        title: 'الأحياء',
        description: 'دراسة شاملة لعلوم الحياة من الخلية إلى النظم البيئية مع التركيز على البحث العلمي',
        jobTitles: ['عالم أحياء', 'باحث وراثة', 'أخصائي بيئة'],
        icon: 'pi pi-heart',
        color: 'teal',
        features: ['علم الوراثة', 'علم البيئة', 'الأحياء الجزيئية'],
        image: 'assets/biology.jpeg'
      },
      {
        id: 6,
        title: 'الجيولوجيا',
        description: 'استكشاف علوم الأرض والمعادن مع التركيز على الاستكشاف والتنقيب والبيئة',
        jobTitles: ['جيولوجي استكشاف', 'خبير بترول', 'مستشار بيئي'],
        icon: 'pi pi-globe',
        color: 'brown',
        features: ['علم المعادن', 'الجيولوجيا البيئية', 'الاستكشاف'],
        image: 'assets/geology.jpg'
      }
    ]
  };

}
