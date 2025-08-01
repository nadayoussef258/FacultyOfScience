// header.component.ts
import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenubarModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  isMobileMenuOpen = false;

  // بيانات التابات بدون أيقونات
  navigationTabs = [
    { label: 'الرئيسية', link: '/' },
    { label: 'عن الكلية', link: '/about' },
    { label: 'البرامج الأكاديمية', link: '/programs' },
    { label: 'هيئة التدريس', link: '/faculty' },
    { label: 'الأخبار', link: '/news' },
    { label: 'تواصل معنا', link: '/contact' }
  ];

  constructor() { }

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