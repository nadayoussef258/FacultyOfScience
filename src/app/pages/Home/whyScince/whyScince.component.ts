import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whyScince',
  imports:[CommonModule, ButtonModule],
  templateUrl: './whyScince.component.html',
  styleUrls: ['./whyScince.component.css']
})
export class WhyScinceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


 
}