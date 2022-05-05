/* readonly 的妙用 */

/* readonly 有點類似 js 裡的 const，但又不完全是 */

{
    class Axios {
        public readonly site: string = 'https://www.houdunren.com/api';

        /* site 可以使用 class 裡的 site 也可以在實例時添加新的 site */
        public constructor(s?: string) {
            this.site = s || this.site;
        }

        public get(url: string): any[] {
            console.log(`你請求的是：${this.site}/${url}`);
            return []
        }
    }

    const xj = new Axios();
    xj.get('user');
}