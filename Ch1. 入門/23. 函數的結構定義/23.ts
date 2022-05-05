/* 函數的結構定義 */

/* 定義一般類型 */
let a: string;
a = 'hdcms';

/* 定義函數，這裡只是單純定義函數，尚未對函數理的結構加以限制 */
let hd: Function;

hd = () => {};

/* 對聲明定義為函數類型，並限制內部結構*/
/* 這裡只是宣告變量並定義為函數類型及其限制 */
let sum: (a: number, b: number) => number;
let sum2: (a: number, b: number) => number;
let sum3: (a: number, b: number) => number;

/* 變量賦值，且須符合定義類型，而實際函數定義的形參名並非要跟定義名一致，但類型必須一致 */
sum = (a, b): number => a + b;
sum2 = (x, y): number => x + y;
sum3 = (x: number, y: number): number => x + y;

// console.log(sum(1, 2)); // 3
// console.log(sum2(1, 2)); // 3
// console.log(sum3(1, 2)); // 3

/* 定義一個添加用戶的函數 */

// let addUser1: (user: {name: string, age: number}) => boolean;

// addUser1 = (u: {name: string, age: number}): boolean => true;

/* 利用 type 把函數定義成類型 */
type userInfo = {name: string, age: number}
type addUserFun = (user: userInfo) => void;

/* 再利用 addUserFun 類型去約束 addUser1，addUser1 必須符合 addUserFun 的函數定義 */
// let addUser1: addUserFun;

/* 函數的實現 */
// addUser1 = (u: userInfo): void => {
//     console.log(`姓名：${u.name}, 年齡：${u.age}`);
// }

/* 定義且實現 */
let addUser1: addUserFun = (u: userInfo): void => {
    console.log(`姓名：${u.name}, 年齡：${u.age}`);
}

console.log(addUser1({name: 'Horatio', age: 27}))




