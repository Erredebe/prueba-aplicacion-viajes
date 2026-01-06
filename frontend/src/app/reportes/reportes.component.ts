import { Component } from '@angular/core';

@Component({
  selector: 'app-reportes',
  standalone: true,
  template: `
    <header class="topbar">
      <div>
        <p class="muted">Análisis y datos</p>
        <h2>Reportes de Viaje</h2>
      </div>
    </header>
    <div class="panel">
      <h3>Análisis de Datos</h3>
      <p class="muted">Los reportes detallados aparecerán aquí.</p>
    </div>
  `
})
export class ReportesComponent {}
