/* 使用 interface 約束 TypeScript 函數 */


{
    /* 約束的規範都是一致的，所以可以使用 interface 來定義規範且使用 */
    /* Q: interface 跟 type 區別及差異?  */

    interface UserInterface {
        name: string
        age: number
        isLock: boolean
    }
    let user: UserInterface = {
        name: '向軍大叔',
        age: 18,
        isLock: false
    }

    // function isLock(user: {name: string, age: number, isLock: boolean}, lock: boolean): {name: string; age: number; isLock: boolean}{
    // user.isLock = lock;
    //     return user;
    // }

    function isLock(user: UserInterface, lock: boolean): UserInterface {
        user.isLock = lock;
        return user;
    }

    isLock(user, true);
    console.log(user);
    
}