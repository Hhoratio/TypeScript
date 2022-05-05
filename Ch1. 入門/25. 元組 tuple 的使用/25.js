/* 元組 tuple 的使用 */
/* 一般數組類型 */
/* 定藝數組類型，且數組的值可以為 number string boolean 沒有順序限制 */
var arr = [2022, 'hdcms', true];
console.log(arr); // [ 2022, 'hdcms', true ]
arr[0] = 'houdunren';
console.log(arr); // [ 'houdunren', 'hdcms', true ]
/* 使用元組 tuple 定義，除了類型是數組外，數組內部的類型順序也被定義 */
var arr2 = ['向軍大叔', 18, false];
console.log(arr2);
// arr2[0] = 2022 // error, arr2[0] 必須是 string
arr2[1] = 40;
arr2[2] = true;
console.log(arr2);
