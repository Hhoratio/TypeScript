let hd: string | number | boolean;

// hd = 'hdcms';
// hd = 2020;
// hd = 1 > 2;

// console.log(hd);

// a 為 array 且只接受值為 string
let a: string[] = ['hdcms'];

// b 為可以是 number 或是 array 類型但職必須為 string
let b: number | string[] = 2020;

console.log(b);


b = ['hdcms'];

// c 為 array 類型且值必須為 number or string
let c: (number | string)[] = [2020, 'hdcms'];

console.log(a);
console.log(b);
console.log(c);

// 利用泛型設置

let d: Array<string | number> = ['hdcms', 2022];

console.log(d);




