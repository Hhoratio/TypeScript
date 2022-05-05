/* interface 結合 enum 與 array */

{
    enum GenderType {
        H,
        D
    }

    interface UserInterface {
        name: string
        age: number
        gender: GenderType
    }

    const hdr: UserInterface = {
        name: '後盾人',
        age: 20,
        gender: GenderType.D
    }

    const xj: UserInterface = {
        name: '向軍大叔',
        age: 18,
        gender: GenderType.H
    }

    const users: UserInterface[] = [hdr, xj];
    console.log(users);
    
}