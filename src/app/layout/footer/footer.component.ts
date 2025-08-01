import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'الرئيسية', link: '/' },
    { label: 'عن الكلية', link: '/about' },
    { label: 'البرامج الأكاديمية', link: '/programs' },
    { label: 'هيئة التدريس', link: '/faculty' },
    { label: 'الأخبار', link: '/news' },
    { label: 'تواصل معنا', link: '/contact' }
  ];

  departments = [
    { label: 'قسم الرياضيات', link: '/departments/math' },
    { label: 'قسم الفيزياء', link: '/departments/physics' },
    { label: 'قسم الكيمياء', link: '/departments/chemistry' },
    { label: 'قسم علوم الحاسب', link: '/departments/cs' },
    { label: 'قسم علم النبات', link: '/departments/botany' },
    { label: 'قسم علم الحيوان', link: '/departments/zoology' }
  ];

  services = [
    { label: 'المكتبة الرقمية', link: '/library' },
    { label: 'نظام إدارة التعلم', link: '/lms' },
    { label: 'البحث العلمي', link: '/research' },
    { label: 'خدمات الطلاب', link: '/student-services' },
    { label: 'التدريب والتطوير', link: '/training' },
    { label: 'الدعم الفني', link: '/support' }
  ];

  socialLinks = [
    { icon: 'pi pi-facebook', link: 'https://facebook.com', label: 'فيسبوك' },
    { icon: 'pi pi-twitter', link: 'https://twitter.com', label: 'تويتر' },
    { icon: 'pi pi-youtube', link: 'https://youtube.com', label: 'يوتيوب' },
    { icon: 'pi pi-linkedin', link: 'https://linkedin.com', label: 'لينكد إن' },
    { icon: 'pi pi-instagram', link: 'https://instagram.com', label: 'إنستغرام' }
  ];

  contactInfo = {
    address: 'مدينة أسوان الجديدة، محافظة أسوان، جمهورية مصر العربية',
    phone: '+20 97 2480960',
    email: 'info@sci.aswu.edu.eg',
    website: 'www.sci.aswu.edu.eg'
  };
}