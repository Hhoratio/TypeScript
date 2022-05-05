"use strict";
/* any 類型就跟原生 js 一樣沒有任何限制，除非必要，不然很少在 ts 裡使用 any，因為 ts 本身就是增強 js 類型的語言 */
/* 默認情況下，如果 variable 沒有限制類型，會默認推斷為 any，並不報錯提示，是因為 tsconfig 的 "noImplicitAny": true 沒有開啟*/
/* 如果將 "noImplicitAny": true 開啟的話，當 variable 沒有宣告類型限制的話，就會提示錯誤 */
let a = [];
// 等同於
let b = []; // 因為基本上所有類型都可以
// 如果 onImplicitAny 開啟時，類型沒有限制的話就會系統報錯提示
// 沒有給定 a b 的類型 就會提示報錯
// function sum(a, b) {
//     return a + b;
// } 
function hd(a, b) {
    return a + b;
}
class Ad {
    constructor() {
        // 實例化物件上的屬性(方法)
        this.get = () => {
            console.log(`hdcms`);
        };
    }
    // class Ad prototype 屬性裡的一個屬性(方法)，也就是 實例化物件原型上的一個屬性(方法)
    show() {
        console.log(`show`);
    }
}
let ad = new Ad();
console.dir(ad);
