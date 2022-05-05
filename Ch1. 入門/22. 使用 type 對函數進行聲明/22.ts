/* 函數參數 type 的使用 */
/* type 主要是對 object 或是 function 進行變量聲明 */

/* 使用 type 聲明變量*/
type userType = {name: string; age: number; city: string; sex?: (number | string)}

/* 模擬一個添加用戶的函數 */
let addUser = (user: {name: string; age: number; city: string; sex?: (number | string)}): void => {
    console.log(`姓名：${user.name}, 年齡：${user.age}, 居住地：${user.city}, 性別：${user.sex}`);
}

addUser({name: 'Horatio', age: 27, city: 'Taichung', sex: 'Male'});

/* 模擬一個更新用戶的函數，函數所傳入的形參類型都是一致的，這時就可以使用 type 來定義形參變數，之後使用變數就可以了 */

// let updateUser = (user: {name: string; age: number; city: string; sex?: (number | string)}): void => {
//     console.log(`姓名：${user.name}, 年齡：${user.age}, 居住地：${user.city}, 性別：${user.sex}`);
// }

let updateUser = (user: userType): void => {
    console.log(`姓名：${user.name}, 年齡：${user.age}, 居住地：${user.city}, 性別：${user.sex}`);
}

updateUser({name: 'Amber', age: 32, city: 'Taipei', sex: 'Female'});