import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home/home.component';
import { ContactPageComponent } from './pages/ContactUs/contactPage/contactPage.component';
import { AboutFacultyPageComponent } from './pages/AboutFaculty/about-faculty-page/about-faculty-page.component';
import { AcademicProgramsPageComponent } from './pages/academicPrograms/academic-programs-page/academic-programs-page.component';
import { NewsPageComponent } from './pages/news/news-page/news-page.component';
import { FacultyPageComponent } from './pages/faculty/faculty-page/faculty-page.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutFacultyPageComponent},
    {path: 'programs', component: AcademicProgramsPageComponent},
    {path: 'news', component: NewsPageComponent},
    {path: 'faculty', component: FacultyPageComponent},
    {path: 'contact', component: ContactPageComponent}
];
