import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
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

  constructor(private _formBuilder: FormBuilder, public toastController: ToastController) { }

  ngOnInit() {
    this.getHotel_room()
    this.reservationForm = this._formBuilder.group({
      name: ['', Validators.required,],
      mail: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      phone_number: ['', Validators.required],
      adult: ['', Validators.required],
      children: ['', Validators.required],
      check_in: ['', Validators.required],
      check_out: ['', Validators.required],
      room: ['', Validators.required],
    });
  }
  async reservation() {
    this.newReservation = await DataService.hotel_rezervasyon.insert(this.reservationForm.value);
    this.reservationForm.reset();

    const toast = await this.toastController.create({
      message: 'The reservation is done',
      duration: 3000
    });
    toast.present();
  }

  async getHotel_room() {
    DataService.hotel_room.getAll().then((res) => {
      this.hotel_room = res;
    })
  }

  getErrorMessage(field) {
    switch (field) {
      case "name":
        if (this.reservationForm.controls['name'].hasError('required')) {
          return 'Name Required';
        }
      case "mail":
        if (this.reservationForm.controls['mail'].hasError('required')) {
          return 'Email Required';
        }
        else if (this.reservationForm.controls['mail'].hasError('pattern')) {
          return 'Please enter valid email';
        }
      case "phone_number":
        if (this.reservationForm.controls['phone_number'].hasError('required')) {
          return 'Phone Required';
        }
      case "adult":
        if (this.reservationForm.controls['adult'].hasError('required')) {
          return 'Adult Number of Required';
        }
      case "children":
        if (this.reservationForm.controls['children'].hasError('required')) {
          return 'Child Number of Required';
        }
        break;
    }

  }
}
