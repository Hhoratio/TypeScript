/* ts 中的 as 斷言。白話就是 我說的算 */


/* 變數定義類型也可以是值類型 */
/* a 的值就只能是 houdunren or hdcms，因為限制住了 */
let a: 'houdunren' | 'hdcms';

// a = '向軍大叔' // error 

function hd(args: boolean): (string | number) {
    return args? 'hdcms': 2022;
}

// let res = hd(true) // res 的值不是 string 就是 number
let res = hd(true) as string // 斷言返回值就只能是 string 類型

res = '向軍大叔' // 因為斷言 res 為 string 類型所以值可以改成其他 string 類型的值

// res = 2030; // error 如果 as 斷言是 string 類型，其他類型的話會 error

console.log(res);
