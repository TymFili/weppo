// Wersja 1: Imperatywna
const divisorsImp = n => {
    const res = [];
    for (let d = 2; n > 1; d++) while (n % d === 0) (res.push(d), n /= d);
    return res;
};

function divisorsFunc(n, d) {
  if (d === undefined) d = 2;

  if (n <= 1) return [];

  if (n % d === 0) {
    var recursiveResult = divisorsFunc(n / d, d);
    return [d].concat(recursiveResult);
  } else {
    return divisorsFunc(n, d + 1);
  }
}

console.log("divisorsImp(10) =", divisorsImp(10)); // [2, 5]
console.log("divisorsImp(20) =", divisorsImp(20)); // [2, 2, 5]

console.log("divisorsFunc(10) =", divisorsFunc(10)); // [2, 5]
console.log("divisorsFunc(20) =", divisorsFunc(20)); // [2, 2, 5]
