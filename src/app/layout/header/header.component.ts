// header.component.ts
import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenubarModule, RouterLink, RouterLinkActive, FormsModule, InputTextModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  isMobileMenuOpen = false;
  searchQuery: string = '';
  isSearchOpen = false;

  // بيانات التابات بدون أيقونات
  navigationTabs = [
    { label: 'الرئيسية', link: '/' },
    { label: 'عن الكلية', link: '/about' },
    { label: 'البرامج الأكاديمية', link: '/programs' },
    { label: 'هيئة التدريس', link: '/faculty' },
    { label: 'الأخبار', link: '/news' },
    { label: 'تواصل معنا', link: '/contact' }
  ];

  // محتوى قابل للبحث
  searchableContent = [
    { title: 'الرئيسية', keywords: ['الرئيسية', 'الصفحة الرئيسية', 'البداية'], route: '/' },
    { title: 'عن الكلية', keywords: ['عن الكلية', 'تاريخ', 'رؤية', 'رسالة', 'أهداف'], route: '/about' },
    { title: 'البرامج الأكاديمية', keywords: ['البرامج', 'الأكاديمية', 'التخصصات', 'الأقسام', 'الدراسة'], route: '/programs' },
    { title: 'قسم الرياضيات', keywords: ['رياضيات', 'الرياضيات', 'محلل بيانات', 'خوارزميات'], route: '/programs' },
    { title: 'قسم الفيزياء', keywords: ['فيزياء', 'الفيزياء', 'فيزيائي طبي', 'ليزر'], route: '/programs' },
    { title: 'قسم الكيمياء', keywords: ['كيمياء', 'الكيمياء', 'كيميائي تحليلي', 'أدوية'], route: '/programs' },
    { title: 'قسم علوم الحاسوب', keywords: ['حاسوب', 'الحاسوب', 'برمجة', 'ذكاء اصطناعي', 'أمن سيبراني'], route: '/programs' },
    { title: 'قسم الأحياء', keywords: ['أحياء', 'الأحياء', 'بيولوجيا', 'وراثة', 'بيئة'], route: '/programs' },
    { title: 'قسم الجيولوجيا', keywords: ['جيولوجيا', 'الجيولوجيا', 'استكشاف', 'بترول', 'بيئي'], route: '/programs' },
    { title: 'هيئة التدريس', keywords: ['هيئة التدريس', 'الأساتذة', 'المدرسين', 'الدكاترة'], route: '/faculty' },
    { title: 'الأخبار والفعاليات', keywords: ['الأخبار', 'فعاليات', 'أحداث', 'مؤتمرات', 'ورش عمل'], route: '/news' },
    { title: 'تواصل معنا', keywords: ['تواصل', 'اتصال', 'عنوان', 'موقع', 'خريطة'], route: '/contact' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
        this.initScrollEffect();

    this.items = this.navigationTabs.map(tab => ({
      label: tab.label,
      routerLink: tab.link
    }));
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  // وظائف البحث
  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    if (!this.isSearchOpen) {
      this.searchQuery = '';
    }
  }

  performSearch() {
    if (!this.searchQuery.trim()) return;

    const query = this.searchQuery.toLowerCase().trim();

    // البحث في المحتوى
    const result = this.searchableContent.find(item =>
      item.keywords.some(keyword =>
        keyword.toLowerCase().includes(query) ||
        query.includes(keyword.toLowerCase())
      )
    );

    if (result) {
      // إغلاق البحث والانتقال للصفحة
      this.isSearchOpen = false;
      this.searchQuery = '';
      this.router.navigate([result.route]);

      // إذا كان البحث عن قسم معين، التمرير إليه
      if (result.route === '/programs' && query.includes('قسم')) {
        setTimeout(() => {
          const element = document.querySelector('.programs-grid');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 500);
      }
    } else {
      // إظهار رسالة عدم وجود نتائج
      alert('لم يتم العثور على نتائج للبحث: ' + this.searchQuery);
    }
  }

  onSearchKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.performSearch();
    }
  }

  initScrollEffect() {
    const header = document.querySelector('.header-container');
    let isScrolled = false;

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 50 && !isScrolled) {
        header?.classList.add('scrolled');
        isScrolled = true;
      } else if (scrollTop <= 50 && isScrolled) {
        header?.classList.remove('scrolled');
        isScrolled = false;
      }
    });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.initScrollEffect);
  }
}