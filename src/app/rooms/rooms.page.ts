import { Component, OnInit } from '@angular/core';
import * as DataService from '../services/bucket'

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {

  hotel_room: DataService.Hotel_room[] = [];
  hotel_web_editor: DataService.Hotel_web_editor;

  constructor() {
    DataService.initialize({ apikey: "fskk1akvi1elv0" })
  }

  async ngOnInit() {
    await this.getHotel_room()
    await this.getHotel_web_editor()
  }

  async getHotel_room() {
    DataService.hotel_room.getAll().then((res) => {
      this.hotel_room = res;
    })
  }

  async getHotel_web_editor() {
    this.hotel_web_editor = await DataService.hotel_web_editor.get("61b3049a482ba5002d99dba9")
  }

}
