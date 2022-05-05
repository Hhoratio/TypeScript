/* 函數參數 type 的使用 */
/* type 主要是對 object 或是 function 進行變量聲明 */
/* 模擬一個添加用戶的函數 */
var addUser = function (user) {
    console.log("\u59D3\u540D\uFF1A".concat(user.name, ", \u5E74\u9F61\uFF1A").concat(user.age, ", \u5C45\u4F4F\u5730\uFF1A").concat(user.city, ", \u6027\u5225\uFF1A").concat(user.sex));
};
addUser({ name: 'Horatio', age: 27, city: 'Taichung', sex: 'Male' });
/* 模擬一個更新用戶的函數，函數所傳入的形參類型都是一致的，這時就可以使用 type 來定義形參變數，之後使用變數就可以了 */
// let updateUser = (user: {name: string; age: number; city: string; sex?: (number | string)}): void => {
//     console.log(`姓名：${user.name}, 年齡：${user.age}, 居住地：${user.city}, 性別：${user.sex}`);
// }
var updateUser = function (user) {
    console.log("\u59D3\u540D\uFF1A".concat(user.name, ", \u5E74\u9F61\uFF1A").concat(user.age, ", \u5C45\u4F4F\u5730\uFF1A").concat(user.city, ", \u6027\u5225\uFF1A").concat(user.sex));
};
updateUser({ name: 'Amber', age: 32, city: 'Taipei', sex: 'Female' });
