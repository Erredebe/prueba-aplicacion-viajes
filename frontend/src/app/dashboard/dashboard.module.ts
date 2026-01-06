import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDashboard } from './trip-dashboard/trip-dashboard';
import { TripDetails } from './trip-details/trip-details';
import { Passengers } from './passengers/passengers';
import { Itinerary } from './itinerary/itinerary';

@NgModule({
  imports: [CommonModule, TripDashboard, TripDetails, Passengers, Itinerary],
  exports: [TripDashboard, TripDetails, Passengers, Itinerary],
})
export class DashboardModule {}
