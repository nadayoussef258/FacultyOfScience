import { Component, OnInit } from '@angular/core';
import { ContactFormComponent } from '../contactForm/contactForm.component';
import { MapComponent } from '../map/map.component';
import { TopSectionComponent } from '../topSection/topSection.component';

@Component({
  selector: 'app-contactPage',
  standalone: true,
  imports: [ContactFormComponent, MapComponent, TopSectionComponent],
  templateUrl: './contactPage.component.html',
  styleUrls: ['./contactPage.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
