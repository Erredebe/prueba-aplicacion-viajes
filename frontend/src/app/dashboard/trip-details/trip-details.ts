import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDetails as TripDetailsModel, TripService } from '../../services/trip.service';

@Component({
  selector: 'app-trip-details',
  imports: [CommonModule],
  templateUrl: './trip-details.html',
  styleUrl: './trip-details.css',
})
export class TripDetails {
  details: TripDetailsModel;

  constructor(private tripService: TripService) {
    this.details = this.tripService.getTripDetails();
  }
}
