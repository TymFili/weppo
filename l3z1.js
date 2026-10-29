const fibRec = n => n <= 1 ? n : fibRec(n - 1) + fibRec(n - 2);

const memoize = fn => {
  const cache = {}; // cache na wyniki; mialo byc funkcyjnie, a juz mamy nieczyste sztuczki
  const memoized = n => cache[n] ??= fn(memoized, n); // funkcja sprawdza cache przed obliczeniami, ??= znaczy "jesli cache jest puste, oblicz i zapisz w cache" - javascript
  return memoized; // madra funkcja jest zwrocona
};

const fibMemo = memoize((f, n) => n <= 1 ? n : f(n - 1) + f(n - 2));

// Pomiar zwykłej rekurencji (wolna)
console.time("fibRec(41)"); 
console.log("Wynik fibRec(41):", fibRec(41)); 
console.timeEnd("fibRec(41)");

// Pierwsze wywołanie fibMemo dla 41 (zapisuje w cache)
console.time("fibMemo(41) [Pierwszy raz]"); 
console.log("Wynik fibMemo(41):", fibMemo(41)); 
console.timeEnd("fibMemo(41) [Pierwszy raz]");

// Kolejny krok / wywołanie dla 42 (korzysta z cache dla 41 i 40, szybka)
console.time("fibMemo(42) [Kolejny krok]"); 
console.log("Wynik fibMemo(42):", fibMemo(42)); 
console.timeEnd("fibMemo(42) [Kolejny krok]");
