/* 單例模式 */
/* 單例模式就是只讓 class 實例化一次 object 之後使用 class 時，就只用當前已生成的 object 而不再實例化新的 */

{
    class Axios {
        /* 定義一個靜態屬性，用來判斷實例是否已經存在，如果是第一次調用則會為 null，之後調用就使用同一個實例化的物件 */
        static instance: null | Axios = null;
        private constructor() {
            console.log(`constructor`);     
        }

        static createAxios(): Axios {
            
            if(Axios.instance == null) {
                console.log(`我只出現一次`);
                
                Axios.instance = new Axios();
            }
            console.log(`之後我都走這裡`);
            
            return Axios.instance;
        }
    }
    // const instance = new Axios(); // 因為 Axios 的 constructor 是 private，所以外部無法直接使用 new Axios()

    const instance = Axios.createAxios();
    const instance2 = Axios.createAxios();
    const instance3 = Axios.createAxios();
    const instance4 = Axios.createAxios();
    // console.log(instance);   
}