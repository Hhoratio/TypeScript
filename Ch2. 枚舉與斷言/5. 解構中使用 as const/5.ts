/* 解構中使用 as const */

{
    function hd() {
        let a = 'houdunren';
        let b =  (x: number, y: number): number => x + y;
    
        /* 在 return 就定義明確返回類型，如果是數組就會變成元組類型*/
        
        // return [a , b] as [typeof a, typeof b];
        /* 等同於 */
    
        return [a, b] as const;
    }
    
    let [m, n] = hd();
    let [o, p] = [...hd()]; 
    // m(1, 2) // 報錯，因為 hd() return [a, b] 的類型不是明確的 (string | function)
    
    /* 利用 as 斷言將 m 斷言為 function */
    // console.log((n as Function)(1, 2)); // 3
    
    /* 在函數 return 時就明確規定類型就可以直接調用解構的值 */
    console.log(n(12, 18));
}