"use strict";
var lengthMap;
(function (lengthMap) {
    lengthMap[lengthMap["mm"] = -3] = "mm";
    lengthMap[lengthMap["cm"] = -2] = "cm";
    lengthMap[lengthMap["dm"] = -1] = "dm";
    lengthMap[lengthMap["m"] = 0] = "m";
    lengthMap[lengthMap["dam"] = 1] = "dam";
    lengthMap[lengthMap["hm"] = 2] = "hm";
    lengthMap[lengthMap["km"] = 3] = "km";
})(lengthMap || (lengthMap = {}));
;
function lengthConvert(value, base, convert) {
    const baseUnit = Math.pow(10, lengthMap[base]);
    console.log(baseUnit);
    const convertUnit = Math.pow(10, lengthMap[convert]);
    console.log(convertUnit);
    return (value * baseUnit) / convertUnit;
}
console.log(lengthConvert(1, 'm', 'dam'));
