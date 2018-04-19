import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { ROUTES } from './app.routes';
import { RouteOneComponent } from './route-one/route-one.component';
import { RouteTwoComponent } from './route-two/route-two.component';
import { RouteThreeComponent } from './route-three/route-three.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    RouteOneComponent,
    RouteTwoComponent,
    RouteThreeComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
