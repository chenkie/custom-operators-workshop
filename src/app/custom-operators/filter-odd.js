// THIS EXERCISE SHOULD BE COMPLETED IN JS BIN :)
// Don't forget to add RxJS as a library in JS Bin

const source = Rx.Observable.interval(500);

function filterOdd(source) {
  // TODO: Implement custom filterOdd operator
}

const odds = filterOdd(source);

odds.subscribe(function(x) {
  console.log(x);
});
