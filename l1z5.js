function fibIter(n) { // O(n)
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) [a, b] = [b, a + b]; // wow
    return b;
}

function fibRec(n) { // O(2^n)
    if (n <= 1) return n;
    return fibRec(n - 1) + fibRec(n - 2);
}

for (const n of [10, 20, 30, 40, 42]) { // powiedzmy, że 42, bo tak nakazuje przyzwoitość
    console.time(`fibIter(${n})`);
    fibIter(n);
    console.timeEnd(`fibIter(${n})`);

    console.time(`fibRec(${n})`);
    fibRec(n);
    console.timeEnd(`fibRec(${n})`);
}