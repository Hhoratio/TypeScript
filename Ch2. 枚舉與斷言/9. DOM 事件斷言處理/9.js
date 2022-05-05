/* DON 事件斷言處理 */
var _this = this;
{
    var btn = document.querySelector('#btn');
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        alert(_this.innerHTML);
    });
}
