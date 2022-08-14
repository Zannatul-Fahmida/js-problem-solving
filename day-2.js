function sum(n, m) {
    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum += i;
    }
    return sum;
}
const isSum = sum(2, 5);
console.log(isSum);