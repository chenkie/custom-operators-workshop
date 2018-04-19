import { FlightsComponent } from './flights/flights.component';

import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: 'flights',
    component: FlightsComponent
  },
  { path: '**', redirectTo: 'flights' }
];
