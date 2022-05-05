/* static 靜態屬性語法使用 */
{
    var Axios_1 = /** @class */ (function () {
        function Axios() {
        }
        Axios.getSite = function () {
            // return this.site;
            return Axios.site;
        };
        Axios.site = 'houdunren.com';
        return Axios;
    }());
    /* static 只能通過類自己調用，實例物件無法使用類的靜態屬性 */
    var instance = new Axios_1();
    // console.log(instance.site); // error
    console.log(Axios_1.site); // 'houdunren'
    console.log(Axios_1.getSite());
}
