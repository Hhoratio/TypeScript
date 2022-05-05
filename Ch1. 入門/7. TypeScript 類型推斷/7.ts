let a = 'hdcms'; // let a: string => 如果沒有給定限制， ts 會自動推斷

let b = 2020; // let b: number

let c: boolean = true; // 也可以自己手動添加限制

// v1 v2 都沒有給定限制，但因為實參也還沒傳入，所以 v1 v2 都是 any
function sum(v1, v2) {
    return v1 + v2;
} 

// 除了可以限制實攙的類型外，也可以限制函數返回結果的類型
function cal(t1: number, t2: number): number {
    return t1 + t2;
}

console.log(sum(1, 2));
console.log(sum(1, 'hs'));

console.log(cal(1, 5));
// console.log(cal(1, 'hs')); // 提示報錯
