/* public 修飾符 */
/* public 顧名思義 公開的意思。默認情況下類的所有 properties 都是 public，實例皆可調用 */
{
    var User = /** @class */ (function () {
        function User(n, a) {
            this.name = n;
            this.age = a;
        }
        User.prototype.info = function () {
            return "$".concat(this.name, " \u5E74\u9F61 ").concat(this.age);
        };
        return User;
    }());
    var xj = new User('向軍大叔', 18);
    console.log(xj);
}
