/* Generices 的繼承 */
{
    /* length 是 string 跟 array 裡的屬性，所以變量 T 就必須去繼承 string 或是 array 或是 自己添加類型 */
    function getLength(args) {
        return args.length;
    }
    function getLength2(args) {
        return args.length;
    }
    /* 限定傳入的參數是數組 */
    function arrayLength(args) {
        return args.length;
    }
    console.log(getLength('houdunren'));
    console.log(getLength(['後盾人', '向軍大叔']));
    console.log(getLength2('houdunren'));
    // console.log(getLength2<string | number>(['後盾人', '向軍大叔', 38])); // error： number 沒有 length 屬性 
    // console.log(arrayLength('houdunren')); // error 因為已竟限制傳入的參數是 array 了
    console.log(arrayLength(['後盾人', '向軍大叔', 23]));
}
