/* 構造函數的 generices 泛型 */

{
    class User<T> {
        // private _user
        constructor(private _user: T) {
    
        }
        public get(): T {
            return this._user;
        }
    }

    interface UserInterface {
        name: string,
        age: number
    }

    const xj = new User<UserInterface>({name: '向軍大叔', age: 18});
    console.log(xj);
    
}