/* void 與 never 的區別 */

// void 也是一種類型，但只接收兩個值 null 或 undefined
let a: void = null;
let b: void = undefined;

console.log(a);
console.log(b);

// let c: void = 98 // 報錯

/* 
    函數中較常看到 void，因為函數基本上會有一個 return 值，當函數的 return 為 undefined 時
    可能代表此函數是執行代碼邏輯，所以可以使用 void 來表示此函數的返回值為 undefined    
*/

function sum(): void {
    // 單純執行 console.log，則 sum() 的 return 默認為 undefined
    console.log(111);
    // return 99; // error => number
    // return 'hdcms'; // error => string

    // return undefined;
    // return null;
}

console.log(sum());

/* never 不會有所謂的 end point，就是遇到錯誤就拋錯停止，或是執行一段不會停止的函數，就是不會執行到最後 */
function hd(): never {
    throw new Error('錯誤')
}
hd();

/* void 會將函數執行到最後。會有默認返回值為 undefined 如果給定 return 必須是 undefined or null */


/* 

    never 就是函數永遠不會有(end point) 

    1. 永遠不會有返回值的函數
    2. 會拋錯錯誤的函數

    never 類型的值永遠是 never
    void 類型的值只會是 undefined 或是 null

    */
    

