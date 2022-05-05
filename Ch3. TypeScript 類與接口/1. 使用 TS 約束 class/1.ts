{
    /* 使用 TS 來約束 class */

class User {
    name: string
    age: number
    constructor(n: string, a: number) {
        this.name = n;
        this.age = a
    }

    info(): string {
        return `${this.name} 今年 ${this.age} 歲。`
    }
}

const hd = new User('後盾人',18);
const xj = new User('向軍大叔', 22);

// const aa = new Object({
//     name: 'hdcms',
//     age: 22,
//     info() {
//         return `aa`
//     }
// });

console.log(hd.info());
console.log(xj.info());
// console.log(aa);


/* 定義一個 user 數組，使用 class User 類來約束，數組裡面的值只能是 class User 實例出來的 object */
const user: User[] = [hd, xj]

console.log(user);

}
