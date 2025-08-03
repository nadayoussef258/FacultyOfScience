import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  imports: [CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent implements OnInit, OnDestroy {

  isHidden = false;
  private lastScrollTop = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100 && scrollTop > this.lastScrollTop) {
      this.isHidden = true;
    } else if (scrollTop < this.lastScrollTop) {
      this.isHidden = false;
    }
    
    this.lastScrollTop = scrollTop;
  }

  socialLinks = [
    {
      name: 'Facebook',
      icon: 'pi pi-facebook',
      url: 'https://facebook.com',
      color: '#1877f2'
    },
    {
      name: 'Twitter',
      icon: 'pi pi-twitter',
      url: 'https://twitter.com',
      color: '#1da1f2'
    },
    {
      name: 'Instagram',
      icon: 'pi pi-instagram',
      url: 'https://instagram.com',
      color: '#e4405f'
    },
    {
      name: 'LinkedIn',
      icon: 'pi pi-linkedin',
      url: 'https://linkedin.com',
      color: '#0077b5'
    },
    {
      name: 'YouTube',
      icon: 'pi pi-youtube',
      url: 'https://youtube.com',
      color: '#ff0000'
    }
  ];

  openSocialLink(url: string): void {
    window.open(url, '_blank');
  }

  goToMap(): void {
    this.router.navigate(['/contact']).then(() => {
      setTimeout(() => {
        const mapElement = document.getElementById('contact-map');
        if (mapElement) {
          mapElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          });
        }
      }, 500);
    });
  }

}
