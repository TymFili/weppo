const pies = {
  wiek: 6,
  "imie-psa": "Azor",
}

console.log(pies.wiek)
console.log(pies["imie-psa"]) // mozemy korzystac z identyfikatorow, ktorych js normalnie nie akceptuje

const obj = {};

obj[1] = "abc";
console.log(obj[1]); // "abc"
console.log(obj["1"]); // "abc"

const keyObj = { toString: () => "abc" };
obj[keyObj] = "xyz";
console.log(obj["abc"]);

const standardObj = {};
obj[standardObj] = "abc";
console.log(obj["[object Object]"]); // abc - obj[standardObj] jest konwertowane na [object Object], ale nie mam pojecia dlaczego tak to wymyslono

const arr = ["A", "B", "C"];

console.log(arr["1"]); // "1" -> 1
arr["foo"] = "bar";

const i = { toString: () => "0" };
console.log(arr[i]);

console.log(arr.length);

// b) liczby sa konwertowane na swoje numeraly, obiekty sa konwertowane bardzo dziwnie (przykladem jest [object Object]), jest obiekt posiada toString, zostanie nalozona
// c1) jesli napis jest numeralem "x", to JavaScript konwertuje napis na x. Jesli nie jest numeralem, to js zapisuje wartosc pod kluczem, ale nie uznaje go za element tablicy
// c2) nalozone zostaje toString
// c3) wlasciwosc jest dodana do *obiektu* tablicy, ale nie tablicy (w szczegolnosci, length jest stale)
// c4) tak, mozna, ustawienie length mniejszego niz jego wartosc obcina tablice. Wieksza wartosc tworzy tzw. sparse array
