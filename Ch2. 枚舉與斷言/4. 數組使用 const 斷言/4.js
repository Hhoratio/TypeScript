/* 數組 as const 斷言 */
var a = 'houdunren'; // => a: stiing
var b = 2022; // => b: number
var arr = [a, b]; // => arr: (string | number)[]
var c = arr[1]; // => c: string | number
var arr1 = [a, b]; // => arr: readonly [string, number]
var d = arr1[1]; // => d: number
console.log(arr1); // ['houdunren', 2022]
