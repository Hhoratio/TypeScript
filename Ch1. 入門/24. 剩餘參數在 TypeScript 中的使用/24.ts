/* rest 運算子在 TypeScript 中使用 */

function sum(...args: any[]) {
    return args.reduce((p, c) => p + c, 0);
}

console.log(sum(1, 2, 3, 4));

/* 利用 push() 了解 args 使用 */

function push(arr: any[], ...args: any[]): any[] {
    /* 如果直接 return arr.push(...args) 會返回的是 arr 的長度 */
    arr.push(...args);
    return arr;
}

let hd = ['houdunren'];
console.log(push(hd, '后盾人', '向軍大叔'));

