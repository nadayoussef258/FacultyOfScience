import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface StudentReview {
  id: number;
  name: string;
  avatar: string;
  dept: string;
  review: string;
  year: string;
}

@Component({
  selector: 'app-student-reviews',
  imports: [CommonModule, FormsModule, ButtonModule, AvatarModule, RatingModule],
  templateUrl: './student-reviews.component.html',
  styleUrls: ['./student-reviews.component.css']
})
export class StudentReviewsComponent implements OnInit {

  studentReviews: StudentReview[] = [
    {
      id: 1,
      name: 'د / ياسمين إبراهيم ',
      avatar: 'assets/fatma.jpeg',
      dept: "قسم الكيمياء الحيوية",
      review: 'من أجمل الحاجات اللي عشتها في كلية علوم أسوان هي روح التعاون بين الطلبة، ووجود دكاترة بيشجعونا على التفكير والإبداع. شاركت في مشاريع تخرج مميزة، وقدرت أكمّل الماجستير في الطاقة المتجددة بفضل الدعم الأكاديمي والمعنوي اللي حصلت عليه',
      year: "دفعة 2018"
    },
    {
      id: 2,
      name: 'د/ محمد حمدي ',
      avatar: 'assets/mohammed.jpg',
      dept: "قسم الجيولوجيا",
      review: 'الكلية قدمتلي فرص رائعة للتدريب العملي والزيارات الميدانية، خصوصًا في مجال الجيولوجيا. حسيت إني مستعد لسوق العمل من أول يوم بعد التخرج، والنهاردة أنا شغال في شركة استكشاف بترول بفضل الأساس القوي اللي اتعلمته هنا',
      year:"دفعة 2020"
    },
    {
      id: 3,
      name: ' د/ فاطمة حسن',
      avatar: 'assets/yasmin.jpeg',
      dept: "قسم الفيزياء",
      review: 'كانت تجربة دراستي في كلية العلوم بجامعة أسوان مميزة جدًا. البيئة التعليمية كانت مشجعة، والدكاترة دايمًا فاتحين أبوابهم للمساعدة. قدرت أشارك في أبحاث وأنا طالبة، وده ساعدني أبدأ دراسات عليا في جامعة مرموقة داخل مصر',
      year: "دفعة 2022"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

 




}