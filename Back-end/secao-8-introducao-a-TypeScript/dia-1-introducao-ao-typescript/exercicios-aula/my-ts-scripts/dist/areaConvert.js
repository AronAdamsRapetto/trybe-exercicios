"use strict";
var areaMap;
(function (areaMap) {
    areaMap[areaMap["mm\u00B2"] = -6] = "mm\u00B2";
    areaMap[areaMap["cm\u00B2"] = -4] = "cm\u00B2";
    areaMap[areaMap["dm\u00B2"] = -2] = "dm\u00B2";
    areaMap[areaMap["m\u00B2"] = 0] = "m\u00B2";
    areaMap[areaMap["dam\u00B2"] = 2] = "dam\u00B2";
    areaMap[areaMap["hm\u00B2"] = 4] = "hm\u00B2";
    areaMap[areaMap["km\u00B2"] = 6] = "km\u00B2";
})(areaMap || (areaMap = {}));
function areaConvert(value, base, convert) {
    const baseUnit = Math.pow(10, areaMap[base]);
    const convertUnit = Math.pow(10, areaMap[convert]);
    return (value * baseUnit) / convertUnit;
}
console.log(areaConvert(1, 'km²', 'mm²'));
