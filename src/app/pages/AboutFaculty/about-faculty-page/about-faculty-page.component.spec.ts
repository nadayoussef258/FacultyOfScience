import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFacultyPageComponent } from './about-faculty-page.component';

describe('AboutFacultyPageComponent', () => {
  let component: AboutFacultyPageComponent;
  let fixture: ComponentFixture<AboutFacultyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutFacultyPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutFacultyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
