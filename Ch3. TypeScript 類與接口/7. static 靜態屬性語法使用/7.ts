/* static 靜態屬性語法使用 */

{
    class Axios {
        static site = 'houdunren.com'
        static getSite(): string {
            // return this.site;
            return Axios.site;
        }
    }

    /* static 只能通過類自己調用，實例物件無法使用類的靜態屬性 */
    const instance = new Axios();
    // console.log(instance.site); // error
    console.log(Axios.site); // 'houdunren'
    console.log(Axios.getSite());
    
}