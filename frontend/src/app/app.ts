import { Component, signal } from '@angular/core';
import { DashboardModule } from './dashboard/dashboard.module';

@Component({
  selector: 'app-root',
  imports: [DashboardModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Dashboard de Viajes');
}
