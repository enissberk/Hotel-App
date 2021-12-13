import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as DataService from '../services/bucket'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  hotel_web_editor: DataService.Hotel_web_editor;
  map_address: any = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6383.93230450171!2d30.638804!3d36.867229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1156b96ae14d8108!2sThe%20Boutique&#39;s%20Hotel!5e0!3m2!1str!2sus!4v1638953599803!5m2!1str!2sus';

  constructor(public sanitizer: DomSanitizer) {
    DataService.initialize({ apikey: "fskk1akvi1elv0" })
  }

  async ngOnInit() {
    this.hotel_web_editor = await this.getHotel_web_editor();
    // this.map_address = 
    console.log(this.map_address)
    // `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.183387534074!2d${this.hotel_web_editor.contact.adress_map[1]}!3d${this.hotel_web_editor.contact.adress_map[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8c20b240cee2c856!2zMzbCsDU0JzM1LjYiTiAzMMKwNDInMDEuMiJF!5e0!3m2!1str!2str!4v1639056392355!5m2!1str!2str`
  }

  async getHotel_web_editor() {
    return DataService.hotel_web_editor.get("61b3049a482ba5002d99dba9")
  }
}
