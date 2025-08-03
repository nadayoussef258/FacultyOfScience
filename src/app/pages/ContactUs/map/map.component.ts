import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  private map!: L.Map;
  private facultyCoordinates: [number, number] = [24.067868, 32.877359]; // كلية العلوم - جامعة أسوان

  constructor() { }

  ngOnInit(): void {
    const iconDefault = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    L.Marker.prototype.options.icon = iconDefault;
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: this.facultyCoordinates,
      zoom: 17,
      zoomControl: true,
      scrollWheelZoom: true
    });

    // إضافة طبقة الخريطة
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // إنشاء أيقونة مخصصة حمراء
    const redIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      iconRetinaUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // إضافة marker لكلية العلوم
    const facultyMarker = L.marker(this.facultyCoordinates, {
      icon: redIcon,
      title: 'كلية العلوم - جامعة أسوان'
    }).addTo(this.map);

    // إضافة popup للـ marker
    facultyMarker.bindPopup(`
      <div style="text-align: center; font-family: 'Cairo', sans-serif; direction: rtl; min-width: 200px;">
        <h4 style="margin: 0 0 10px 0; color: #dc3545; font-size: 1.2rem; font-weight: 600;">🏛️ كلية العلوم</h4>
        <p style="margin: 0 0 8px 0; color: #2c3e50; font-weight: 500;">جامعة أسوان</p>
        <p style="margin: 0; color: #6c757d; font-size: 0.9rem;">أسوان - مصر</p>
        <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #eee;">
          <small style="color: #007bff;">📍 الموقع الدقيق للكلية</small>
        </div>
      </div>
    `).openPopup();

    // إضافة دائرة حول الموقع
    L.circle(this.facultyCoordinates, {
      color: '#dc3545',
      fillColor: '#dc3545',
      fillOpacity: 0.15,
      radius: 150,
      weight: 2
    }).addTo(this.map);
  }
}
