/* 使用接口模擬支付功能 */

{   
    /* 規範支付功能 */
    interface PayInterface {
        handle(price: number): void
    }

    class GooglePay implements PayInterface {
        handle(price: number): void {
            alert(`使用 GooglePay 付款 ${price} 元`);
        }
    }

    class LinePay {
        handle(price: number): void {
            alert(`使用 LinePay 付款 ${price} 元`);
        }
    }

    function pay(type: string, price: number): void {
        let pay: PayInterface;
        switch(type) {
            case 'GooglePay':
                pay = new GooglePay();
                break;
            case 'LinePay':
                pay = new LinePay();
                break;
            default:
                break;
        }

        pay.handle(price);
    }
}