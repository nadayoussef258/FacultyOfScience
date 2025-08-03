import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-faculty-grid',
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './faculty-grid.component.html',
  styleUrl: './faculty-grid.component.css'
})
export class FacultyGridComponent {

  facultyData = {
    header: {
      subtitle: 'هيئة التدريس',
      title: 'أعضاء هيئة التدريس المتميزون',
      description: 'نخبة من الأساتذة والخبراء في مختلف التخصصات العلمية'
    },

    faculty: [
      {
        id: 1,
        name: 'د. فاطمة أحمد محمد',
        title: 'أستاذ الكيمياء العضوية',
        department: 'قسم الكيمياء',
        specialization: 'الكيمياء العضوية والطبية',
        education: 'دكتوراه في الكيمياء - جامعة القاهرة',
        experience: '15 سنة',
        email: 'fatma.ahmed@science.aswu.edu.eg',
        phone: '+20 97 123 4567',
        image: 'assets/fatma.jpeg',
        researchInterests: ['الكيمياء الطبية', 'تطوير الأدوية', 'الكيمياء الحيوية'],
        publications: 25,
        courses: ['كيمياء عضوية 1', 'كيمياء عضوية 2', 'كيمياء طبية']
      },
      {
        id: 2,
        name: 'د. محمد علي حسن',
        title: 'أستاذ الفيزياء النظرية',
        department: 'قسم الفيزياء',
        specialization: 'فيزياء الكم والجسيمات',
        education: 'دكتوراه في الفيزياء - جامعة أسوان',
        experience: '12 سنة',
        email: 'mohamed.ali@science.aswu.edu.eg',
        phone: '+20 97 123 4568',
        image: 'assets/mohammed.jpg',
        researchInterests: ['فيزياء الكم', 'فيزياء الجسيمات', 'النسبية العامة'],
        publications: 18,
        courses: ['فيزياء حديثة', 'ميكانيكا الكم', 'فيزياء نووية']
      },
      {
        id: 3,
        name: 'د. ياسمين محمود سالم',
        title: 'أستاذ مساعد الأحياء الجزيئية',
        department: 'قسم الأحياء',
        specialization: 'الأحياء الجزيئية والوراثة',
        education: 'دكتوراه في الأحياء الجزيئية - جامعة الإسكندرية',
        experience: '8 سنوات',
        email: 'yasmin.mahmoud@science.aswu.edu.eg',
        phone: '+20 97 123 4569',
        image: 'assets/yasmin.jpeg',
        researchInterests: ['الهندسة الوراثية', 'البيولوجيا الجزيئية', 'علم الجينوم'],
        publications: 12,
        courses: ['أحياء جزيئية', 'علم الوراثة', 'هندسة وراثية']
      },
      {
        id: 4,
        name: 'د. أحمد سعد إبراهيم',
        title: 'أستاذ الرياضيات التطبيقية',
        department: 'قسم الرياضيات',
        specialization: 'التحليل العددي والإحصاء',
        education: 'دكتوراه في الرياضيات التطبيقية - جامعة عين شمس',
        experience: '20 سنة',
        email: 'ahmed.saad@science.aswu.edu.eg',
        phone: '+20 97 123 4570',
        image: 'assets/mohammed.jpg',
        researchInterests: ['التحليل العددي', 'الإحصاء التطبيقي', 'نمذجة رياضية'],
        publications: 30,
        courses: ['تحليل عددي', 'إحصاء تطبيقي', 'رياضيات متقدمة']
      },
      {
        id: 5,
        name: 'د. نورا حسام الدين',
        title: 'أستاذ علوم الحاسوب',
        department: 'قسم علوم الحاسوب',
        specialization: 'الذكاء الاصطناعي وتعلم الآلة',
        education: 'دكتوراه في علوم الحاسوب - جامعة القاهرة',
        experience: '10 سنوات',
        email: 'nora.hossam@science.aswu.edu.eg',
        phone: '+20 97 123 4571',
        image: 'assets/fatma.jpeg',
        researchInterests: ['الذكاء الاصطناعي', 'تعلم الآلة', 'معالجة اللغات الطبيعية'],
        publications: 22,
        courses: ['ذكاء اصطناعي', 'تعلم آلة', 'خوارزميات متقدمة']
      },
      {
        id: 6,
        name: 'د. خالد عبد الرحمن',
        title: 'أستاذ الجيولوجيا البيئية',
        department: 'قسم الجيولوجيا',
        specialization: 'الجيولوجيا البيئية والمياه الجوفية',
        education: 'دكتوراه في الجيولوجيا - جامعة أسيوط',
        experience: '18 سنة',
        email: 'khaled.abdel@science.aswu.edu.eg',
        phone: '+20 97 123 4572',
        image: 'assets/mohammed.jpg',
        researchInterests: ['الجيولوجيا البيئية', 'المياه الجوفية', 'التلوث البيئي'],
        publications: 28,
        courses: ['جيولوجيا بيئية', 'هيدروجيولوجيا', 'علوم الأرض']
      }
    ]
  };

}
