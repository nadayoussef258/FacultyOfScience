import { CommonModule, DatePipe } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { Component, OnInit } from '@angular/core';
interface Activity {
  id: number;
  title: string;
  image: string;
  description?: string;
  date?: string;
}

@Component({
  selector: 'app-student-activities',
  imports:[DatePipe, CarouselModule,CommonModule],
  templateUrl: './student-activities.component.html',
  styleUrls: ['./student-activities.component.css']
})
export class StudentActivitiesComponent implements OnInit {

  activities: Activity[] = [
    {
      id: 1,
      title: 'رحلات علمية ميدانية',
      image: 'assets/trip.jpg',
      description: 'زيارة للمواقع الجيولوجية أو المصانع العلمية في أسوان  ',
      date: '2024-03-15'
    },
    {
      id: 2,
      title: 'نادي البحث العلمي',
      image: 'assets/search.jpeg',
      description: 'مجموعة طلابية تهدف إلى دعم البحث والتجربة تحت إشراف  متخصصين',
      date: '2023-03-20'
    },
    {
      id: 3,
      title: 'حملات التوعية البيئية',
      image: 'assets/env.jpg',
      description: 'تنظيم حملات طلابية للتوعية بأهمية الحفاظ على النظام البيئي.',
      date: '2022-03-25'
    },
    {
      id: 4,
      title: 'أنشطة ثقافية وفنية',
      image: 'assets/aswanmasr.jpeg',
      description: 'مشاركة الطلاب في عروض مسرحية، أمسيات شعرية، ومسابقات ثقافية  ',
      date: '2021-04-01'
    }
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onActivityClick(activity: Activity): void {
    console.log('Activity clicked:', activity);
    // يمكنك إضافة المنطق المطلوب عند الضغط على النشاط
  }
}