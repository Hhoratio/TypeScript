/* interface 接口 generices 多類型的自定義 */

{
    interface ArticleInterface<B, C> {
        title: string,
        Admin: B,
        comments: C[]
    }

    type BooleanOrNumber = boolean | number;

    type Comments = {
        contents: string,
        auther: string
    }
    const data: ArticleInterface<BooleanOrNumber, Comments> = {
        title: 'houdunren.com',
        Admin: true,
        comments: [{contents: '后盾人，人人做后盾', auther: '向軍大叔'}]
    }
    console.log(data);
    
}

