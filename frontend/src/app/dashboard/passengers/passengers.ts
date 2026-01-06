import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Passenger, TripService } from '../../services/trip.service';

@Component({
  selector: 'app-passengers',
  imports: [CommonModule],
  templateUrl: './passengers.html',
  styleUrl: './passengers.css',
})
export class Passengers {
  passengers: Passenger[] = [];

  constructor(private tripService: TripService) {
    this.passengers = this.tripService.getPassengers();
  }
}
