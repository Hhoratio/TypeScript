/* interface 結合 enum 與 array */
{
    var GenderType = void 0;
    (function (GenderType) {
        GenderType[GenderType["H"] = 0] = "H";
        GenderType[GenderType["D"] = 1] = "D";
    })(GenderType || (GenderType = {}));
    var hdr = {
        name: '後盾人',
        age: 20,
        gender: GenderType.D
    };
    var xj = {
        name: '向軍大叔',
        age: 18,
        gender: GenderType.H
    };
    var users = [hdr, xj];
    console.log(users);
}
