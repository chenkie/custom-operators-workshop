import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { reportRouteChanges } from './custom-operators/report-route-changes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public routeReport: any;
  constructor(private router: Router) {}

  ngOnInit() {
    // TODO: Use reportRouteChanges operator to get
    // route changes
    this.router.events.pipe(...);
  }
}
