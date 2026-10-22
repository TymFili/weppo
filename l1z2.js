function checkNumber(n) {
    const digits = n.toString().split('').map(Number); // Funkcyjne, hura!
    if (digits.includes(0)) return false;
    const sum = digits.reduce((acc, d) => acc + d, 0);
    if (n % sum !== 0) return false;
    for (const d of digits) if (n % d !== 0) return false;
    return true;
}

function findNumbers(n) {
    const result = [];
    for (let i = 1; i <= n; i++) if (checkNumber(i)) result.push(i);
    return result;
}

const res = findNumbers(100000);
console.log(`${res.length} liczb`);