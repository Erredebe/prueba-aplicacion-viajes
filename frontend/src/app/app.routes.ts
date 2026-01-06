import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard-page/dashboard-page.component').then(m => m.DashboardPageComponent)
  },
  {
    path: 'reservas',
    loadComponent: () => import('./reservas/reservas.component').then(m => m.ReservasComponent)
  },
  {
    path: 'pasajeros',
    loadComponent: () => import('./dashboard/passengers/passengers').then(m => m.Passengers)
  },
  {
    path: 'itinerario',
    loadComponent: () => import('./dashboard/itinerary/itinerary').then(m => m.Itinerary)
  },
  {
    path: 'reportes',
    loadComponent: () => import('./reportes/reportes.component').then(m => m.ReportesComponent)
  }
];
