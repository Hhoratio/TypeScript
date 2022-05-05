/* 訪問器 get 與 set */

/* get 與 set 就是不讓用戶可以直接訪問或修改原本的值，而是通過 set 與 get 去設置 (中間層的概念) */

// {
//     class User {
//         private static site: string = 'houdunren.com'
//         private static _name: string = '後盾人'

//         public get name(): string {
//             return User._name;
//         }

//         public set name(name: string) {
//             User._name = name;
//         }
//     }

//     const instance = new User();
//     console.log(instance);
//     console.log(instance.name);
//     instance.name = '向軍大叔';
//     console.log(instance.name);
    
// }

{
    class Article {
        private _lists: any[] = [];

        public get article(): any[] {
            return this._lists.map(article => {
                article.title = article.title.substr(0, 2);
                return article;
            })
        }

        public set article(lists: any[]) {
            this._lists = lists;
        }
    }
    const instance = new Article();
    instance.article = [{title: '後盾人'}, {title: '向軍大叔'}];
    console.log(instance.article);
    
}

