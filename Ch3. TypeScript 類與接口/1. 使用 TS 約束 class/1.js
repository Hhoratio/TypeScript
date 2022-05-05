/* 使用 TS 來約束 class */
var User = /** @class */ (function () {
    function User(n, a) {
        this.name = n;
        this.age = a;
    }
    User.prototype.info = function () {
        return "".concat(this.name, " \u4ECA\u5E74 ").concat(this.age, " \u6B72\u3002");
    };
    return User;
}());
var hd = new User('後盾人', 18);
var xj = new User('向軍大叔', 22);
// const aa = new Object({
//     name: 'hdcms',
//     age: 22,
//     info() {
//         return `aa`
//     }
// });
console.log(hd.info());
console.log(xj.info());
// console.log(aa);
/* 定義一個 user 數組，使用 class User 類來約束，數組裡面的值只能是 class User 實例出來的 object */
var user = [hd, xj];
console.log(user);
