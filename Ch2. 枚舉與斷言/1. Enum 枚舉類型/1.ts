/* enum 枚舉類型 */


/* 有時候會想使用 0 1 來表示性別，但是又沒辦法確定所以資料的 0 1 表示的性別相同 */

/* 利用 enum 來定義*/
/* 默認情況下第一個值為 0 其次一次遞增。若是數值類型給定初始值，則以初始值開始累加*/
enum sexType {
    Male, // 0
    Female, // 1
}

// enum sexType {
//     Male, // 0
//     Female = 5, // 5
//     a, // 6
//     b, // 7
// }

/* 如果其中一個給定非數值的初始值的話，就必須給每個變數設置初始值 */
// enum sexType {
//     Male = '男', 
//     Female = '女', 
// }

let user = {
    name: 'houdunren',
    age: 18,
    gender: sexType.Male
}

console.log(sexType.Male); // 0 
console.log(sexType.Female); // 1
// console.log(sexType.a); 
// console.log(sexType.b); 

console.log(user);
