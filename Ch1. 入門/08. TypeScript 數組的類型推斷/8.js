var hd = ['houdunren', 100]; // ts 自動推斷為數組類型且限制只能傳遞 string 
// 就等於
var h = ['houdunren'];
h.push('yahoo.com');
console.log(h);
h.push(100); // 報錯，因為只能傳 string
console.log(h);
