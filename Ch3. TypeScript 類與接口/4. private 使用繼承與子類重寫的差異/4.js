/* private 的使用與子類重寫的差異 */
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
/* private => protected => public */
/* private 權限最高，只能在當前的類內部使用，子類及其實例物件皆無法使用或調用 */
/* protected 權限次之，能在當前類內部使用以及繼承當前類的子類內部使用，實例化物件依然無法調用或使用 */
/* public 權限最低，當前類及子類與實例化物件皆可使用 */
/* 覆蓋方面，private 的屬性或方法子類無法覆蓋(重寫)，而 protected 子類可以覆蓋或是降級( public )重寫 */
{
    var Person = /** @class */ (function () {
        function Person() {
            this.site = 'houdunren.com';
        }
        Person.prototype.info = function () {
            console.log("\u53EA\u6709\u81EA\u8EAB\u7684\u985E\u624D\u53EF\u4EE5\u8ABF\u7528 private \u5C6C\u6027 ".concat(this.site));
        };
        Person.prototype.show = function () {
            return this.info();
        };
        Person.prototype.test = function () {
            console.log(111);
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
