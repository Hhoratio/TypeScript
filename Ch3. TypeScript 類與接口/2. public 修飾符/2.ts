/* public 修飾符 */

/* public 顧名思義 公開的意思。默認情況下類的所有 properties 都是 public，實例皆可調用 */
{
    class User {
        public name: string
        public age: number
        constructor(n: string, a: number) {
            this.name = n;
            this.age = a;
        }

        public info() {
            return `$${this.name} 年齡 ${this.age}`;
        }
    }


    const xj: User = new User('向軍大叔', 18);
    console.log(xj);
    




}