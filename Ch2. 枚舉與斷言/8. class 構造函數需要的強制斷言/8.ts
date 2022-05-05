/* class 構造函數需要的強制的斷言 */

{
    class Hd {
        el: HTMLDivElement
        constructor(el: HTMLDivElement) {
            this.el = el;
        }

        html() {
            console.log(this.el.innerHTML);
            
        }
    }

    const div = document.querySelector('.hd') as HTMLDivElement;
    const obj = new Hd(div);
    console.dir(Hd);
    

    obj.html();
}

