var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* protected 修飾符 */
/*
    protected 就是受保護的 properties 除了受 protected 當前的類以及繼承 protected 的類可以內部調用外
    實例化的 object 無法使用
*/
{
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.info = function () {
            return "\u6211\u662F\u53D7\u5230 protected \u7684\u65B9\u6CD5\uFF0C\u6240\u4EE5\u5BE6\u4F8B\u5316\u7269\u4EF6\u7121\u6CD5\u8ABF\u7528\u6211\uFF0C\u53EA\u6709\u6211\u7684\u985E\u8DDF\u7E7C\u627F\u7684\u5B50\u985E\u53EF\u4EE5";
        };
        Person.prototype.show = function () {
            console.log(this.info());
        };
        return Person;
    }());
    var User = /** @class */ (function (_super) {
        __extends(User, _super);
        function User(n, a) {
            var _this = _super.call(this) || this;
            _this.name = n;
            _this.age = a;
            return _this;
        }
        return User;
    }(Person));
    var xj = new User('向軍大叔', 18);
    console.log(xj);
    // xj.info() // 無法調用，因為受到 protected
    xj.show();
}
