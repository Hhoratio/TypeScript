/* null 和 undefined 類型使用技巧 */
/* 默認情況下，null 與 undefined 雖然也是類型，但也可以變成其他類型的值 number string boolean object */

let a: undefined = undefined;
let b: null = null;

let c: void = undefined;
let d: void = null;

let e: number = undefined;
e = null

let f: string = undefined;
f = null;

let g: boolean = undefined;
g = null;

let h: [] = undefined;
h = null;

let i: {} = undefined;
i = null;

/* 如果要限定 null 與 undefined 不能設為其他類型的值的話，需要再 tsconfig 設置 "strictNullChecks": true, */

