import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryCard, TripService } from '../../services/trip.service';

@Component({
  selector: 'app-trip-dashboard',
  imports: [CommonModule],
  templateUrl: './trip-dashboard.html',
  styleUrl: './trip-dashboard.css',
})
export class TripDashboard {
  summaryCards: SummaryCard[] = [];

  constructor(private tripService: TripService) {
    this.summaryCards = this.tripService.getSummaryCards();
  }
}
