import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItineraryItem, TripService } from '../../services/trip.service';

@Component({
  selector: 'app-itinerary',
  imports: [CommonModule],
  templateUrl: './itinerary.html',
  styleUrl: './itinerary.css',
})
export class Itinerary {
  itinerary: ItineraryItem[] = [];

  constructor(private tripService: TripService) {
    this.itinerary = this.tripService.getItinerary();
  }
}
