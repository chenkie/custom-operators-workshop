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
    this.router.events.pipe(reportRouteChanges()).subscribe(report => {
      this.routeReport = report;
    });
  }
}
