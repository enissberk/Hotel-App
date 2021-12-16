import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as DataService from '../services/bucket'

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {

  hotel_room: DataService.Hotel_room[] = [];
  reservationForm: FormGroup;
  newReservation: DataService.Hotel_rezervasyon;

  constructor(private _formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.getHotel_room()

    this.reservationForm = this._formBuilder.group({
      name: '',
      email: '',
      phone:'',
      adult:'',
      child:'',
      check_in:'',
      check_out:'',
      room:'',
    });
  }
  async reservation(){
    this.newReservation = await DataService.hotel_rezervasyon.insert({
      name: this.reservationForm.value.name,
      mail: this.reservationForm.value.email,
      phone_number: this.reservationForm.value.phone,
      adult: this.reservationForm.value.adult,
      children: this.reservationForm.value.child,
      check_in: this.reservationForm.value.check_in,
      check_out: this.reservationForm.value.check_out,
      room: this.reservationForm.value.room._id,
    });
  }

  async getHotel_room() {
    DataService.hotel_room.getAll().then((res) => {
      this.hotel_room = res;
    })
  }
}
