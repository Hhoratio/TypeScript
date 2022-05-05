function sum(a, b) {
    return a + b;
}
// console.log(sum(3, 'hd')); // 已經限制 a 跟 b 都必須是 number 所以在 ts 或 tsc 時就會提示報錯
console.log(sum(5, 10));
