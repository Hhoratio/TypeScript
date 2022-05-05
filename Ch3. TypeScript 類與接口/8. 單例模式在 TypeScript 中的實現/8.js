/* 單例模式 */
/* 單例模式就是只讓 class 實例化一次 object 之後使用 class 時，就只用當前已生成的 object 而不再實例化新的 */
{
    var Axios_1 = /** @class */ (function () {
        function Axios() {
            console.log("constructor");
        }
        Axios.createAxios = function () {
            if (Axios.instance == null) {
                console.log("\u6211\u53EA\u51FA\u73FE\u4E00\u6B21");
                Axios.instance = new Axios();
            }
            console.log("\u4E4B\u5F8C\u6211\u90FD\u8D70\u9019\u88E1");
            return Axios.instance;
        };
        /* 定義一個靜態屬性，用來判斷實例是否已經存在，如果是第一次調用則會為 null，之後調用就使用同一個實例化的物件 */
        Axios.instance = null;
        return Axios;
    }());
    // const instance = new Axios(); // 因為 Axios 的 constructor 是 private，所以外部無法直接使用 new Axios()
    var instance = Axios_1.createAxios();
    var instance2 = Axios_1.createAxios();
    var instance3 = Axios_1.createAxios();
    var instance4 = Axios_1.createAxios();
    // console.log(instance);   
}
