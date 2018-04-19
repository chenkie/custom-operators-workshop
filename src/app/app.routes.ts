import { RouteThreeComponent } from './route-three/route-three.component';
import { RouteOneComponent } from './route-one/route-one.component';
import { FlightsComponent } from './flights/flights.component';

import { Routes } from '@angular/router';
import { RouteTwoComponent } from './route-two/route-two.component';

export const ROUTES: Routes = [
  {
    path: 'flights',
    component: FlightsComponent
  },
  {
    path: 'route-one',
    component: RouteOneComponent
  },
  {
    path: 'route-two',
    component: RouteTwoComponent
  },
  {
    path: 'route-three',
    component: RouteThreeComponent
  },
  { path: '**', redirectTo: 'flights' }
];
