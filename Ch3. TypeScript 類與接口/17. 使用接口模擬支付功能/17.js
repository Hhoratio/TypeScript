/* 使用接口模擬支付功能 */
{
    var GooglePay_1 = /** @class */ (function () {
        function GooglePay() {
        }
        GooglePay.prototype.handle = function (price) {
            alert("\u4F7F\u7528 GooglePay \u4ED8\u6B3E ".concat(price, " \u5143"));
        };
        return GooglePay;
    }());
    var LinePay_1 = /** @class */ (function () {
        function LinePay() {
        }
        LinePay.prototype.handle = function (price) {
            alert("\u4F7F\u7528 LinePay \u4ED8\u6B3E ".concat(price, " \u5143"));
        };
        return LinePay;
    }());
    function pay(type, price) {
        var pay;
        switch (type) {
            case 'GooglePay':
                pay = new GooglePay_1();
                break;
            case 'LinePay':
                pay = new LinePay_1();
                break;
            default:
                break;
        }
        pay.handle(price);
    }
}
