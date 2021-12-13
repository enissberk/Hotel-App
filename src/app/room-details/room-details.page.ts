import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as DataService from '../services/bucket'

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.page.html',
  styleUrls: ['./room-details.page.scss'],
})
export class RoomDetailsPage implements OnInit {

  id: any;
  hotel_room: DataService.Hotel_room;
  hotel_web_editor: DataService.Hotel_web_editor;

  constructor(private activatedRoute: ActivatedRoute) {
    DataService.initialize({ apikey: "fskk1akvi1elv0" })
  }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    await this.getHotel_room()
    await this.getHotel_web_editor()
  }

  async getHotel_room() {
    this.hotel_room = await DataService.hotel_room.get(this.id)
  }

  async getHotel_web_editor() {
    this.hotel_web_editor = await DataService.hotel_web_editor.get("61b3049a482ba5002d99dba9")
  }
}
