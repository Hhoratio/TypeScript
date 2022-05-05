/* 接口的繼承 */
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
{
    var Animation_1 = /** @class */ (function () {
        function Animation() {
        }
        Animation.prototype.getPos = function () {
            return { x: 100, y: 300 };
        };
        return Animation;
    }());
    var Enemy = /** @class */ (function (_super) {
        __extends(Enemy, _super);
        function Enemy() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = '電腦';
            return _this;
        }
        Enemy.prototype.move = function () {
            console.log("".concat(this.name, " \u7684\u5766\u514B\u8ECA"));
        };
        Enemy.prototype.end = function () {
            console.log("\u904A\u6232\u7D50\u675F");
        };
        return Enemy;
    }(Animation_1));
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = '玩家';
            return _this;
        }
        Player.prototype.move = function () {
            console.log("".concat(this.name, " \u7684\u5766\u514B\u8ECA"));
        };
        Player.prototype.end = function () {
            console.log("\u904A\u6232\u7D50\u675F");
        };
        return Player;
    }(Animation_1));
    var en = new Enemy();
    var p = new Player();
    en.move();
    p.move();
    en.end();
    p.end();
}
