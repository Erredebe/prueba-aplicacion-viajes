import { Injectable } from '@angular/core';

export interface SummaryCard {
  title: string;
  value: string;
  description: string;
}

export interface TripDetails {
  code: string;
  origin: string;
  destination: string;
  departure: string;
  return: string;
  airline: string;
  hotel: string;
  status: string;
}

export interface Passenger {
  name: string;
  seat: string;
  document: string;
  status: string;
  loyalty: string;
}

export interface ItineraryItem {
  day: string;
  time: string;
  title: string;
  location: string;
  notes: string;
}

@Injectable({
  providedIn: 'root',
})
export class TripService {
  getSummaryCards(): SummaryCard[] {
    return [
      {
        title: 'Destino principal',
        value: 'Barcelona, España',
        description: 'Septiembre 12 - Septiembre 19',
      },
      {
        title: 'Estado del viaje',
        value: 'Confirmado',
        description: 'Pagos y reservas al día',
      },
      {
        title: 'Presupuesto',
        value: '$3,200 USD',
        description: '75% comprometido',
      },
      {
        title: 'Viajeros',
        value: '4 pasajeros',
        description: '2 adultos · 2 niños',
      },
    ];
  }

  getTripDetails(): TripDetails {
    return {
      code: 'BCN-2024-09',
      origin: 'Ciudad de México (MEX)',
      destination: 'Barcelona (BCN)',
      departure: '12 Sep 2024 · 08:40 AM',
      return: '19 Sep 2024 · 06:15 PM',
      airline: 'Iberia · IB6402',
      hotel: 'Hotel Arts Barcelona',
      status: 'Confirmado',
    };
  }

  getPassengers(): Passenger[] {
    return [
      {
        name: 'María Fernández',
        seat: '12A',
        document: 'MX1234567',
        status: 'Check-in pendiente',
        loyalty: 'Iberia Plus Oro',
      },
      {
        name: 'Luis Fernández',
        seat: '12B',
        document: 'MX7654321',
        status: 'Check-in pendiente',
        loyalty: 'Iberia Plus Plata',
      },
      {
        name: 'Sofía Fernández',
        seat: '12C',
        document: 'MX5544332',
        status: 'Menor acompañado',
        loyalty: 'Sin membresía',
      },
      {
        name: 'Diego Fernández',
        seat: '12D',
        document: 'MX9988776',
        status: 'Menor acompañado',
        loyalty: 'Sin membresía',
      },
    ];
  }

  getItinerary(): ItineraryItem[] {
    return [
      {
        day: 'Día 1 · 12 Sep',
        time: '08:40',
        title: 'Salida desde MEX',
        location: 'Terminal 1',
        notes: 'Check-in 2 horas antes. Equipaje en puerta 14.',
      },
      {
        day: 'Día 1 · 12 Sep',
        time: '18:30',
        title: 'Llegada a BCN',
        location: 'Terminal 2',
        notes: 'Traslado privado hacia el hotel.',
      },
      {
        day: 'Día 2 · 13 Sep',
        time: '10:00',
        title: 'Tour modernista',
        location: 'Casa Batlló',
        notes: 'Reservas confirmadas para 4 personas.',
      },
      {
        day: 'Día 4 · 15 Sep',
        time: '19:00',
        title: 'Cena en la Barceloneta',
        location: 'Restaurante Can Solé',
        notes: 'Mesa al aire libre. Menú degustación.',
      },
      {
        day: 'Día 6 · 17 Sep',
        time: '09:30',
        title: 'Excursión a Montserrat',
        location: 'Punto de encuentro: Plaza Catalunya',
        notes: 'Incluye guía en español.',
      },
    ];
  }
}
