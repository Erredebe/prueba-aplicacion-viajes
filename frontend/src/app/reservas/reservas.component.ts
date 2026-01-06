import { Component } from '@angular/core';

@Component({
  selector: 'app-reservas',
  standalone: true,
  template: `
    <header class="topbar">
      <div>
        <p class="muted">Gestión de viajes</p>
        <h2>Reservas y Vuelos</h2>
      </div>
    </header>
    <div class="panel">
      <h3>Próximamente</h3>
      <p class="muted">El módulo de reservas está en desarrollo.</p>
    </div>
  `
})
export class ReservasComponent {}
