/* constructor 構造函數在 TypeScript 中的特性 */
{
    var User = /** @class */ (function () {
        // name: string
        /* 可以將變量類型聲明直接寫在 constructor */
        function User(name) {
            this.name = name;
            this.name = this.initName(name);
        }
        User.prototype.initName = function (userName) {
            return "".concat(userName, " - houdunren");
        };
        return User;
    }());
    var xj = new User('後盾人');
    console.log(xj.name);
}
