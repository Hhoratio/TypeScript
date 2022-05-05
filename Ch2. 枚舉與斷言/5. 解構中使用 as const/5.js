/* 解構中使用 as const */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
{
    function hd() {
        var a = 'houdunren';
        var b = function (x, y) { return x + y; };
        /* 在 return 就定義明確返回類型，如果是數組就會變成元組類型*/
        // return [a , b] as [typeof a, typeof b];
        /* 等同於 */
        return [a, b];
    }
    var _a = hd(), m = _a[0], n = _a[1];
    var _b = __spreadArray([], hd(), true), o = _b[0], p = _b[1];
    // m(1, 2) // 報錯，因為 hd() return [a, b] 的類型不是明確的 (string | function)
    /* 利用 as 斷言將 m 斷言為 function */
    // console.log((n as Function)(1, 2)); // 3
    /* 在函數 return 時就明確規定類型就可以直接調用解構的值 */
    console.log(n(12, 18));
}
