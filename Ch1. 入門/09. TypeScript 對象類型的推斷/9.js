var hd = {
    name: 'houdunren',
    age: 20,
    lesson: [
        { title: 'JavaScript' },
        { title: 'TypeScript' },
        [1]
    ]
};
hd.lesson.push({ title: 'aaa' });
// hd.lesson.push({name: 'aaa'}) // 報錯
var hdcms = {
    name: '後盾人',
    age: 2022,
    lesson: [
        { title: 'html' }
    ]
};
var a = [20, { title: 'aa' }];
console.log(hd);
console.log(hdcms);
