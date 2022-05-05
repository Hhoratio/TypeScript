/* DOM 類型推斷與斷言處裡 */

{
    /* 因為 body 如果存在，就是唯一的，所以 ts 推斷就會是明確的 HTMLBodyElement，或只為 null (不存在) */
    let body = document.querySelector('body') as HTMLBodyElement; // 明確的話就可以直接使用 as 斷言
    // let body = document.querySelector('body')!; // 使用非空斷言也可以，因為 body 是唯一的

    /* 
        div 因為是使用 class 選取，而 .hd 有可能是 div a img 等標籤，在模糊的情況下，ts 會推斷 原型鏈上
        最接近的類型 Element | null
     */
    let div = document.querySelector('.hd')! // 明確的話就可以使用 as 斷言或非空斷言 
}