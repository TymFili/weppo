function fibIterator() {
  var a = 0, b = 1;
  return {
    next: function() {
      var current = a;
      a = b;
      b = current + b;
      return {
        value: current,
        done: false // bo nieskonczony
      };
    },
    [Symbol.iterator]: function() { // teraz jest kompatybilny z petla for-of
      return this;
    }
  };
}

function* fibGenerator() {
  var a = 0, b = 1;
  while (true) {
    yield a; // zatrzymuje stan i zwraca kolejna wartosc
    var current = a;
    a = b;
    b = current + b;
  }
}

console.log("--- Test 1: wyklad ---");
var _it = fibIterator();
var counter1 = 0;
for (var _result; _result = _it.next(), !_result.done; ) {
  console.log(_result.value);
  if (++counter1 >= 10) break; // Ochrona przed nieskonczona petla
}

console.log("--- Test 2: Petla for-of ---");
var counter2 = 0;
for (var i of fibGenerator()) {
  console.log(i);
  if (++counter2 >= 10) break; // Ochrona przed nieskonczona petla 
}
