var AdvanceFeatures = /** @class */ (function () {
    function AdvanceFeatures() {
        this.list = [
            { name: 'generic datatype' },
            { name: 'access modifier' }
        ];
    }
    AdvanceFeatures.prototype.getFeatureList = function (key, list) {
        return list.filter(function (ele, index, arr) {
            return ele.name.includes(key || 'modifier');
        });
    };
    return AdvanceFeatures;
}());
var af = new AdvanceFeatures();
var list = [
    { name: 'generic datatype' },
    { name: 'access modifier' }
];
var result = af.getFeatureList('modifier', list);
console.log(result);
