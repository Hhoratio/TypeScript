/* 泛型與類在 TypeScript 中的結合 */

{   
    /* class number */
    class NumberCollection {
        data: number[] = [];
        public push(...items: number[]): void {
            this.data.push(...items)
        }

        public shift(): number {
            return this.data.shift()
        }
    }

    /* class string */
    class StringCollection {
        data: string[] = [];
        public push(...items: string[]): void {
            this.data.push(...items);
        }

        public shift(): string {
            return this.data.shift()
        }
    }

    /* 功能一樣，但類型不同就可以使用泛型定義，不需要一個一個類去定義 */

    class Collection<T> {
        data: T[] = [];
        public push(...items: T[]): void {
            this.data.push(...items)
        }

        public shift(): T {
            return this.data.shift();
        }
    }

    // let numberCol = new NumberCollection();
    // numberCol.push(1, 2, 3, 4, 5);
    // console.log(numberCol.data);
    

    // let stringCol = new StringCollection();
    // stringCol.push('後盾人', '向軍大叔');
    // console.log(stringCol.data);

    const number = new Collection<number>();
    number.push(1, 2, 3, 4, 5);
    console.log(number.shift());

    const string = new Collection<string>();
    string.push('后盾人', '向軍大叔');
    console.log(string.shift());
    

    /* class Collection 也可以規範其他像是用戶資料等 */

    type User = {
        name: string,
        age: number
    }

    const hdr: User = {name: '後盾人', age: 20};
    const xj: User = {name: '向軍大叔', age: 18};

    const userCollections = new Collection<User>();
    userCollections.push(hdr, xj);
    console.log(userCollections.shift())

}