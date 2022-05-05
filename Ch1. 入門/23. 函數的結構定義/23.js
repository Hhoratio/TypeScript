/* 函數的結構定義 */
/* 定義一般類型 */
var a;
a = 'hdcms';
/* 定義函數，這裡只是單純定義函數，尚未對函數理的結構加以限制 */
var hd;
hd = function () { };
/* 對聲明定義為函數類型，並限制內部結構*/
/* 這裡只是宣告變量並定義為函數類型及其限制 */
var sum;
var sum2;
var sum3;
/* 變量賦值，且須符合定義類型，而實際函數定義的形參名並非要跟定義名一致，但類型必須一致 */
sum = function (a, b) { return a + b; };
sum2 = function (x, y) { return x + y; };
sum3 = function (x, y) { return x + y; };
/* 再利用 addUserFun 類型去約束 addUser1，addUser1 必須符合 addUserFun 的函數定義 */
// let addUser1: addUserFun;
/* 函數的實現 */
// addUser1 = (u: userInfo): void => {
//     console.log(`姓名：${u.name}, 年齡：${u.age}`);
// }
/* 定義且實現 */
var addUser1 = function (u) {
    console.log("\u59D3\u540D\uFF1A".concat(u.name, ", \u5E74\u9F61\uFF1A").concat(u.age));
};
console.log(addUser1({ name: 'Horatio', age: 27 }));
