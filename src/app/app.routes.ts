import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home/home.component';
import { ContactPageComponent } from './pages/ContactUs/contactPage/contactPage.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contact', component: ContactPageComponent}
];
