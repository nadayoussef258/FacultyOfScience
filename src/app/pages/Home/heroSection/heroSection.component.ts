import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundImage: string;
  overlayColor: string;
}

@Component({
  selector: 'app-heroSection',
  imports:[CommonModule, PanelModule],
  templateUrl: './heroSection.component.html',
  styleUrls: ['./heroSection.component.css']
})
export class HeroSectionComponent implements OnInit, OnDestroy {

  currentSlideIndex = 0;

  constructor(private router: Router) {}
  slides: HeroSlide[] = [
    {
      id: 1,
      title: 'Laboratory for testing and medical research',
      subtitle: 'Advanced diagnostic solutions with cutting-edge technology',
      buttonText: 'تصفح برامجنا الأكاديمية',
      backgroundImage: 'assets/science-web-banner.jpg',
      overlayColor: 'linear-gradient(135deg, rgba(0, 123, 255, 0.8), rgba(0, 200, 150, 0.8))'
    },
    {
      id: 2,
      title: 'Precision Medicine & Advanced Analytics',
      subtitle: 'Delivering accurate results with state-of-the-art equipment',
      buttonText: 'تصفح برامجنا الأكاديمية',
      backgroundImage: 'assets/billboard-edge-undergrad.jpg',
      overlayColor: 'linear-gradient(135deg, rgba(76, 175, 80, 0.8), rgba(139, 195, 74, 0.8))'
    },
    {
      id: 3,
      title: 'Research Excellence & Innovation',
      subtitle: 'Pioneering medical research for better healthcare outcomes',
      buttonText: 'تصفح برامجنا الأكاديمية',
      backgroundImage: 'assets/young-scientist-looking-through-microscope-laboratory-young-scientist-doing-some-research-kopie.jpg',
      overlayColor: 'linear-gradient(135deg, rgba(156, 39, 176, 0.8), rgba(103, 58, 183, 0.8))'
    }
  ];

  private slideInterval: any;
  private readonly SLIDE_DURATION = 5000; // 5 seconds

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, this.SLIDE_DURATION);
  }

  stopAutoSlide(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
    this.stopAutoSlide();
    // Restart auto slide after manual navigation
    setTimeout(() => {
      this.startAutoSlide();
    }, 1000);
  }

  getCurrentSlide(): HeroSlide {
    return this.slides[this.currentSlideIndex];
  }

  onSlideClick(): void {
    // Navigate to academic programs page
    this.router.navigate(['/programs']);
  }
}