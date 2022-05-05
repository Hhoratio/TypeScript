const hd = {
    name: 'houdunren',
    age: 20,
    lesson: [
        {title: 'JavaScript'},
        {title: 'TypeScript'},
        [1]
    ]
}

hd.lesson.push({title: 'aaa'})
// hd.lesson.push({name: 'aaa'}) // 報錯

const hdcms: {name: string; age: number; url? : string} = {
    name: '後盾人',
    age: 2022,
}

const a = [20, {title: 'aa'}]

console.log(hd);
console.log(hdcms);
