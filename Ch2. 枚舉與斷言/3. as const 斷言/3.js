/* as const 斷言 */
/* 在 js 中 const 定義常量，是不可修改 */
var c = 'houdunren'; // const c: 'houdunren'
// c = 'houdunren' // error 因為是 const 聲明
var b; // b 也是一個值類型，值為固定的，但因為是 let 聲明，所以可以更改，只是值還是必須是 向軍大叔
// b = 'aaa' // error
b = '向軍大叔';
var d = 'hdcms';
var e = 2022;
var f = 2010;
var arr = [d, e]; // => let arr: (string | number)[] 泛型，arr 裡的值只要是 string 或 number 都行
var arr1 = [d, e, 'houdunren', 2023, false]; // => arr1: (string | number | boolean)[]
/* 數組如果 as const 斷言，就會變成 元組 */
var arr2 = [d, e, f, 'hdcms', true]; // => arr: [string, number, 2010, 'hdcms', true] 
/* object */
/* 沒有 as const 時， name: string 類型。加上 as const 後，name: 'houdunren' */
var obj = {
    name: 'houdunren',
    year: e
};
/* array 跟 object 只要加上 as const 就會變成 readonly */
