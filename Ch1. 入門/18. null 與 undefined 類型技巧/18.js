/* null 和 undefined 類型使用技巧 */
/* 默認情況下，null 與 undefined 雖然也是類型，但也可以變成其他類型的值 number string boolean object */
var a = undefined;
var b = null;
var c = undefined;
var d = null;
var e = undefined;
e = null;
var f = undefined;
f = null;
var g = undefined;
g = null;
var h = undefined;
h = null;
var i = undefined;
i = null;
/* 如果要限定 null 與 undefined 不能設為其他類型的值的話，需要再 tsconfig 設置 "strictNullChecks": true, */
