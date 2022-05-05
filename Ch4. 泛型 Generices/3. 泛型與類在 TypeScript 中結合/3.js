/* 泛型與類在 TypeScript 中的結合 */
{
    /* class number */
    var NumberCollection = /** @class */ (function () {
        function NumberCollection() {
            this.data = [];
        }
        NumberCollection.prototype.push = function () {
            var _a;
            var items = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                items[_i] = arguments[_i];
            }
            (_a = this.data).push.apply(_a, items);
        };
        NumberCollection.prototype.shift = function () {
            return this.data.shift();
        };
        return NumberCollection;
    }());
    /* class string */
    var StringCollection = /** @class */ (function () {
        function StringCollection() {
            this.data = [];
        }
        StringCollection.prototype.push = function () {
            var _a;
            var items = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                items[_i] = arguments[_i];
            }
            (_a = this.data).push.apply(_a, items);
        };
        StringCollection.prototype.shift = function () {
            return this.data.shift();
        };
        return StringCollection;
    }());
    /* 功能一樣，但類型不同就可以使用泛型定義，不需要一個一個類去定義 */
    var Collection = /** @class */ (function () {
        function Collection() {
            this.data = [];
        }
        Collection.prototype.push = function () {
            var _a;
            var items = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                items[_i] = arguments[_i];
            }
            (_a = this.data).push.apply(_a, items);
        };
        Collection.prototype.shift = function () {
            return this.data.shift();
        };
        return Collection;
    }());
    // let numberCol = new NumberCollection();
    // numberCol.push(1, 2, 3, 4, 5);
    // console.log(numberCol.data);
    // let stringCol = new StringCollection();
    // stringCol.push('後盾人', '向軍大叔');
    // console.log(stringCol.data);
    var number = new Collection();
    number.push(1, 2, 3, 4, 5);
    console.log(number.shift());
    var string = new Collection();
    string.push('后盾人', '向軍大叔');
    console.log(string.shift());
    var hdr = { name: '後盾人', age: 20 };
    var xj = { name: '向軍大叔', age: 18 };
    var userCollections = new Collection();
    userCollections.push(hdr, xj);
    console.log(userCollections.shift());
}
