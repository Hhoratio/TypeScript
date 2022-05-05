/* private 的使用與子類重寫的差異 */

/* private => protected => public */
/* private 權限最高，只能在當前的類內部使用，子類及其實例物件皆無法使用或調用 */
/* protected 權限次之，能在當前類內部使用以及繼承當前類的子類內部使用，實例化物件依然無法調用或使用 */
/* public 權限最低，當前類及子類與實例化物件皆可使用 */

/* 覆蓋方面，private 的屬性或方法子類無法覆蓋(重寫)，而 protected 子類可以覆蓋或是降級( public )重寫 */


{
    class Person {
        public name: string
        protected age: number
        private site: string = 'houdunren.com'
        constructor() {

        }

        protected info() {
            console.log(`只有自身的類才可以調用 private 屬性 ${this.site}`);
        }

        public show() {
            return this.info();
        }

        public test() {
            console.log(111);
            
        }
    }

    class User extends Person {
        constructor(n: string, a: number) {
            super();
            this.name = n;
            this.age = a;
        }

        // test() {} // 因為 test 已經是父類的私有屬性了，所以 User 會提示錯誤
        // private test() {} // test 在父類為 protected 屬性，所以子類覆蓋只能為 protected 或 public
        // test() {} //  test 在父類是 public 所以子類只能是 public 不能比父類高

    }

    const xj = new User('向軍大叔', 18);
    console.log(xj);
    // xj.info() // 無法調用，因為受到 protected
    xj.show();
}