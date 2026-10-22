function isPrime(n) { // O(\sqrt{n})
    if (n < 2) return false;
    if (n % 2 == 0) return (n === 2);
    for (let i = 3; i * i <= n; i += 2) if (n % i === 0) return false;
    return true;
}

function Primes(max) {
    const primes = [];
    if (max < 2) return primes;
    primes.push(2);
    for (let i = 3; i <= max; i += 2) if (isPrime(i)) primes.push(i);
    return primes;
}

console.time("Czas generacji");
const primes = Primes(100000);
console.timeEnd("Czas generacji");
console.log(`Znaleziono: ${primes.length}`);