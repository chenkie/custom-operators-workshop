// THIS EXERCISE SHOULD BE COMPLETED IN JS BIN :)
// Don't forget to add RxJS as a library in JS Bin

const source = Rx.Observable.interval(500);

function filterOdd(source) {
  return Rx.Observable.create(function(observer) {
    source.subscribe(
      function(value) {
        if (value % 2 === 0) {
          observer.next(value);
        }
      },
      function(err) {
        observer.error(err);
      },
      function() {
        observer.complete();
      }
    );
  });
}

const odds = filterOdd(source);

odds.subscribe(function(x) {
  console.log(x);
});
