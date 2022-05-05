/* DON 事件斷言處理 */

{
    const btn = document.querySelector('#btn') as HTMLButtonElement;

    btn.addEventListener('click', (e: Event) => {
        e.preventDefault();
        alert(this.innerHTML);
    })
}