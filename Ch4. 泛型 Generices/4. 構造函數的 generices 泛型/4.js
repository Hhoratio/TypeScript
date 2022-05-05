/* 構造函數的 generices 泛型 */
{
    var User = /** @class */ (function () {
        // private _user
        function User(_user) {
            this._user = _user;
        }
        User.prototype.get = function () {
            return this._user;
        };
        return User;
    }());
    var xj = new User({ name: '向軍大叔', age: 18 });
    console.log(xj);
}
