/* 非空斷言 */
/* ! 非空斷言，沒有 null 存在的意思 */
{
    var a = 'houdunren';
    /* 在沒有開啟配置項 strictNullChecks 時， null undefined 是可以賦值給其他類型的 */
    /* 當開啟 strictNullChecks 時，在編譯過程就會提示錯誤，除非在定義時添加這兩個類型 */
    // a = null 
    // a = undefined // error
    // const el: HTMLDivElement = document.querySelector('.hd') as HTMLDivElement; // 斷言
    var el1 = document.querySelector('.hd'); // 幫還沒斷言時， el1 的類型會自動推斷為 Element(最近) | null 
    var el = document.querySelector('.hd'); // 非空斷言 
    // console.log(el.innerHTML);
    function pro(el) {
        var p = [];
        p.push(el.__proto__);
        p.push.apply(p, (el.__proto__ ? pro(el.__proto__) : null));
        return p;
    }
    console.log(pro(el));
}
