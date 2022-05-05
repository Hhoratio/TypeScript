/* class 構造函數需要的強制的斷言 */
{
    var Hd = /** @class */ (function () {
        function Hd(el) {
            this.el = el;
        }
        Hd.prototype.html = function () {
            console.log(this.el.innerHTML);
        };
        return Hd;
    }());
    var div = document.querySelector('.hd');
    var obj = new Hd(div);
    console.dir(Hd);
    obj.html();
}
