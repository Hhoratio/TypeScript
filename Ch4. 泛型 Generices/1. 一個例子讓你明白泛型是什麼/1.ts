/* 泛型 Generices */
/* 當沒有明確規範類型時，系統會自動推斷，但往往推斷都會是 any (任何類型) */
/* 而有時候類型必須是之後才能確定，所以有了泛型的概念 (動態添加類型) */


{
    /* 沒有給定任何類型規範，其類型皆為 any */
    function dump(arg) {
        return arg;
    }

    /* 就算傳遞的參數為 string，但系統推斷還是 any */
    /* hd 推斷還是為 any 類型 */
    let hd = dump('houdunren.com');


    /* Generices 泛型，在一開始定義時先定義成泛型，之後使用時在動態將類型傳入，讓系統去推斷 */

    function test<T>(args: T): T {
        return args;
    }

    /* 傳入 string 類型，hdr 自動推斷為 string */
    let hdr = test('hdcms')

    /* xj: number */
    let xj = test(18)
}