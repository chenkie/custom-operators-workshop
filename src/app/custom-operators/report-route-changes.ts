import { NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { filter, pairwise, map } from 'rxjs/operators';

export const reportRouteChanges = () => (source: Observable<any>) => {
  return new Observable(observer => {
    // TOOD: Implement custom operator logic!
  });
};
