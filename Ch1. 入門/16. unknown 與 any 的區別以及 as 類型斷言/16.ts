/* unknown 與 any 的區別 以及 as 斷言 */

/* unknown 也是一種類型，跟 any 不同地方在於 any 是任意類型皆可，而 unknown 就是 unknown 類型*/

let a: any = 'houdunren.com';

let b: string = a;

console.log(b);

let c: unknown = 2022;

// let d: string = c; // c 為 unknown 類型，不是 string

let e: unknown = c;

console.log(c);

// as 斷言(轉換概念)

let f: unknown = 'hdcms.com';

let g: string = f as string;

console.log(g);

// as 也可以轉換類型(類似中繼站，帶必須跟 unknown 搭配) 無法直接複寫固定類型

let h: string = '99';

// let i: number = h as number // 無法強制複寫固定類型是無效的

let j: number = h as unknown as number;

console.log(j);



