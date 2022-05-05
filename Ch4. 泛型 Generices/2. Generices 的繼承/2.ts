/* Generices 的繼承 */

{
    /* length 是 string 跟 array 裡的屬性，所以變量 T 就必須去繼承 string 或是 array 或是 自己添加類型 */
    function getLength<T extends string | any[]>(args: T): number {
        return args.length
    }

    function getLength2<T extends {length: number}>(args: T): number {
        return args.length
    }

    /* 限定傳入的參數是數組 */
    function arrayLength<T>(args: T[]): number {
        return args.length
    }

    console.log(getLength('houdunren'));
    console.log(getLength(['後盾人', '向軍大叔']));

    console.log(getLength2<string | any[]>('houdunren'));
    // console.log(getLength2<string | number>(['後盾人', '向軍大叔', 38])); // error： number 沒有 length 屬性 

    // console.log(arrayLength('houdunren')); // error 因為已竟限制傳入的參數是 array 了
    console.log(arrayLength<string | number>(['後盾人', '向軍大叔', 23]));
    
}