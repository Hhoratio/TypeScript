/* 使用 interface 約束 TypeScript 函數 */
{
    var user = {
        name: '向軍大叔',
        age: 18,
        isLock: false
    };
    // function isLock(user: {name: string, age: number, isLock: boolean}, lock: boolean): {name: string; age: number; isLock: boolean}{
    // user.isLock = lock;
    //     return user;
    // }
    function isLock(user, lock) {
        user.isLock = lock;
        return user;
    }
    isLock(user, true);
    console.log(user);
}
