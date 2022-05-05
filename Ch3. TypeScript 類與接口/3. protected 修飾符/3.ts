/* protected 修飾符 */
/* 
    protected 就是受保護的 properties 除了受 protected 當前的類以及繼承 protected 的類可以內部調用外 
    實例化的 object 無法使用
*/
{

    class Person {
        public name: string
        protected age: number
        constructor() {

        }

        protected info() {
            return `我是受到 protected 的方法，所以實例化物件無法調用我，只有我的類跟繼承的子類可以`;
        }

        public show() {
            console.log(this.info());
        }
    }

    class User extends Person {
        constructor(n: string, a: number) {
            super();
            this.name = n;
            this.age = a;
        }
    }

    const xj = new User('向軍大叔', 18);
    console.log(xj);
    // xj.info() // 無法調用，因為受到 protected
    xj.show();
}

