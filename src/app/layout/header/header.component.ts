import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
    imports: [CommonModule, MenubarModule],

  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
      items: MenuItem[] = [];

  constructor() { 

  }

  ngOnInit() {
    this.items = [
      { label: 'الرئيسية', icon: 'pi pi-home', routerLink: '/' },
      { label: 'عن الكلية', icon: 'pi pi-info-circle', routerLink: '/about' },
      { label: 'البرامج الأكاديمية', icon: 'pi pi-book', routerLink: '/programs' },
      { label: 'هيئة التدريس', icon: 'pi pi-users', routerLink: '/faculty' },
      { label: 'الأخبار', icon: 'pi pi-bell', routerLink: '/news' },
      { label: 'تواصل معنا', icon: 'pi pi-envelope', routerLink: '/contact' },
    ];
  }

}
