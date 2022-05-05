/* 數組 as const 斷言 */


let a = 'houdunren'; // => a: stiing
let b = 2022; // => b: number

let arr = [a, b] // => arr: (string | number)[]

let c = arr[1] // => c: string | number

let arr1 = [a, b] as const; // => arr: readonly [string, number]

let d = arr1[1] // => d: number

console.log(arr1); // ['houdunren', 2022]
