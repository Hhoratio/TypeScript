/* 使用接口約束 TypeScript 對象 */

{

    interface UserInfo {
        name: string
        age: number
        [key: string]: any
    }

    let obj: UserInfo = {
        name: '向軍大叔',
        age: 40,
        city: 'Mongolia'
    }

    console.log(obj);
    
}