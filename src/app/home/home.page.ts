import { Component } from '@angular/core';
import * as DataService from '../services/bucket'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  hotel_room: DataService.Hotel_room[] = [];
  hotel_web_editor: DataService.Hotel_web_editor;
  hotel_activities: DataService.Hotel_activities[] = [];

  constructor() {
    DataService.initialize({ apikey: "fskk1akvi1elv0" })
  }

  async ngOnInit() {
    await this.getHotel_room()
    await this.getHotel_web_editor()
    await this.getHotel_activities()
  }

  async getHotel_room() {
    DataService.hotel_room.getAll({queryParams:{limit: 2}}).then((res) => {
      this.hotel_room = res;
    })
  }

  async getHotel_web_editor() {
    this.hotel_web_editor = await DataService.hotel_web_editor.get("61b3049a482ba5002d99dba9")
  }

  async getHotel_activities() {
    DataService.hotel_activities.getAll().then((res) => {
      this.hotel_activities = res;
    })
  }

  option = {
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    speed: 500,
    autoplay: true,
  }
}

