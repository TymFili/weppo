function* fib() {
  var a = 0, b = 1;
  while (true) {
    yield a;
    var current = a;
    a = b;
    b = current + b;
  }
}

function* take(it, top) {
  var count = 0;
  while (count < top) {
    var result = it.next();
    if (result.done) break;
    yield result.value;
    count++;
  }
}

for (let num of take(fib(), 10)) {
  console.log(num);
}

// fib tworzy generator, zas take(fib(), 10) nowy, skonczony generator.
// gdy take wyda 10 wartosci, petla konczy
