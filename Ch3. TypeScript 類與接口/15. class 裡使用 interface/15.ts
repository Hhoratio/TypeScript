/* class 裡使用 interface */

{
    interface infoInterface {
        name: string
        age: number
    }
    class User {
        constructor(public _info: infoInterface) {
            this._info = _info
        }
        get info(): infoInterface {
            return this._info;
        }
    }

    let instance = new User({name: '向軍大叔', age: 18})
    console.log(instance.info);
    
}