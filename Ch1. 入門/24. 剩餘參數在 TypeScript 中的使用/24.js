/* rest 運算子在 TypeScript 中使用 */
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (p, c) { return p + c; }, 0);
}
console.log(sum(1, 2, 3, 4));
/* 利用 push() 了解 args 使用 */
function push(arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    /* 如果直接 return arr.push(...args) 會返回的是 arr 的長度 */
    arr.push.apply(arr, args);
    return arr;
}
var hd = ['houdunren'];
console.log(push(hd, '后盾人', '向軍大叔'));
