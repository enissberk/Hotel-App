import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {

  headerImage : string; 
  @Input() gallery;
  
  sliderOpts = {
    slidesPerView: 4.3,
    spaceBetween: 7,
  }
  constructor() { }

  ngOnInit() {
    this.headerImage=this.gallery.images[0];
  }
}
