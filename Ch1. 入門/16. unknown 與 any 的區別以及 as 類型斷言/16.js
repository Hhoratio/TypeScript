/* unknown 與 any 的區別 以及 as 斷言 */
/* unknown 也是一種類型，跟 any 不同地方在於 any 是任意類型皆可，而 unknown 就是 unknown 類型*/
var a = 'houdunren.com';
var b = a;
console.log(b);
var c = 2022;
// let d: string = c; // c 為 unknown 類型，不是 string
var e = c;
console.log(c);
// as 斷言(轉換概念)
var f = 'hdcms.com';
var g = f;
console.log(g);
// as 也可以轉換類型(類似中繼站，帶必須跟 unknown 搭配) 無法直接複寫固定類型
var h = '99';
// let i: number = h as number // 無法強制複寫固定類型是無效的
var j = h;
console.log(j);
