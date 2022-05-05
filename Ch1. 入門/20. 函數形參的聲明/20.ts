/* 函數參數設定 */

function sum(a: number, b: number, ratio: number = 10): (number | void) {
    // ratio 如果有給定默認值的話就不需要使用 ratio?: number
    // ratio = ratio || 10

    return (a + b) * ratio;
}