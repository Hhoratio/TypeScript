/* readonly 的妙用 */
/* readonly 有點類似 js 裡的 const，但又不完全是 */
{
    var Axios = /** @class */ (function () {
        /* site 可以使用 class 裡的 site 也可以在實例時添加新的 site */
        function Axios(s) {
            this.site = 'https://www.houdunren.com/api';
            this.site = s || this.site;
        }
        Axios.prototype.get = function (url) {
            console.log("\u4F60\u8ACB\u6C42\u7684\u662F\uFF1A".concat(this.site, "/").concat(url));
            return [];
        };
        return Axios;
    }());
    var xj = new Axios();
    xj.get('user');
}
