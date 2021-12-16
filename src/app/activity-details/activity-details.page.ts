import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as DataService from '../services/bucket'

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.page.html',
  styleUrls: ['./activity-details.page.scss'],
})
export class ActivityDetailsPage implements OnInit {

  galleries = new Array(5);
  id: any;
  hotel_activities: DataService.Hotel_activities;
  hotel_web_editor: DataService.Hotel_web_editor;

  sliderOpts = {
    slidesPerView: 4.5,
    spaceBetween: 7,
  }

  constructor(private activatedRoute: ActivatedRoute) {
    DataService.initialize({ apikey: "fskk1akvi1elv0" })
  }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    await this.getHotel_activities()
    await this.getHotel_web_editor()
  }

  async getHotel_activities() {
    this.hotel_activities = await DataService.hotel_activities.get(this.id)
  }

  async getHotel_web_editor() {
    this.hotel_web_editor = await DataService.hotel_web_editor.get("61b3049a482ba5002d99dba9")
  }
}
