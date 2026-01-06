import { Component } from '@angular/core';
import { DashboardModule } from '../dashboard/dashboard.module';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [DashboardModule],
  template: `
    <header class="topbar">
      <div>
        <p class="muted">Bienvenido de vuelta</p>
        <h2>Dashboard de Viajes</h2>
      </div>
      <div class="topbar-actions">
        <div class="status-pill">
          <span class="dot"></span>
          Última actualización: hace 2h
        </div>
        <button class="secondary-btn">Exportar</button>
      </div>
    </header>

    <section class="dashboard-section">
      <app-trip-dashboard></app-trip-dashboard>
    </section>

    <section class="dashboard-grid">
      <app-trip-details></app-trip-details>
      <app-passengers></app-passengers>
    </section>

    <section class="dashboard-section">
      <app-itinerary></app-itinerary>
    </section>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  `]
})
export class DashboardPageComponent {}
