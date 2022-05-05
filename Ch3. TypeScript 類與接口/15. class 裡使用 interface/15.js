/* class 裡使用 interface */
{
    var User = /** @class */ (function () {
        function User(_info) {
            this._info = _info;
            this._info = _info;
        }
        Object.defineProperty(User.prototype, "info", {
            get: function () {
                return this._info;
            },
            enumerable: false,
            configurable: true
        });
        return User;
    }());
    var instance = new User({ name: '向軍大叔', age: 18 });
    console.log(instance.info);
}
