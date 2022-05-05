/* constructor 構造函數在 TypeScript 中的特性 */

{
    class User {
        // name: string
        /* 可以將變量類型聲明直接寫在 constructor */
        constructor(public name: string) {
            this.name = this.initName(name);
        }
        private initName(userName: string) {
            return `${userName} - houdunren`;
        }
    }

    const xj = new User('後盾人');
    console.log(xj.name);
    
}