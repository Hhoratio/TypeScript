// string
let a: string = 'hdcms';

// number
let b: number = 10;

// boolean
let c: boolean = true;

// 類型組合
let d: (string | number | boolean) = 1 > 1;

// array
let e: [] = [];

// array 且限制 array 裡的類型
let f: (string | number)[] = ['hdcms', 20]

// 泛型方式
let g: Array<string> = ['houdunren']

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
