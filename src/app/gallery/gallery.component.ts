import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {

  @Input() gallery;
  constructor() { }

  ngOnInit() {
    
  }
  sliderOpts = {
    slidesPerView: 4.3,
    spaceBetween: 7,
  }
}
