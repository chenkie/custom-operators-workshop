import { NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { filter, pairwise, map } from 'rxjs/operators';

export const reportRouteChanges = () => (source: Observable<any>) => {
  return new Observable(observer => {
    return source
      .pipe(
        filter(event => event instanceof NavigationEnd),
        pairwise(),
        map((route: any) => {
          const [previous, current] = route;
          return { previous: previous.url, current: current.url };
        })
      )
      .subscribe({
        next(change: any) {
          observer.next(change);
        },
        error(err: any) {
          observer.error(err);
        },
        complete() {
          observer.complete();
        }
      });
  });
};
