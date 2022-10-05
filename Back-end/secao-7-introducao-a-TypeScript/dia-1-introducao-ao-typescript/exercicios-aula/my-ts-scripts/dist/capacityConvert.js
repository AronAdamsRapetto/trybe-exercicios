"use strict";
var capacityMap;
(function (capacityMap) {
    capacityMap[capacityMap["ml"] = -3] = "ml";
    capacityMap[capacityMap["cl"] = -2] = "cl";
    capacityMap[capacityMap["dl"] = -1] = "dl";
    capacityMap[capacityMap["l"] = 0] = "l";
    capacityMap[capacityMap["dal"] = 1] = "dal";
    capacityMap[capacityMap["hl"] = 2] = "hl";
    capacityMap[capacityMap["kl"] = 3] = "kl";
})(capacityMap || (capacityMap = {}));
function capacityConvert(value, base, convert) {
    const baseUnit = Math.pow(10, capacityMap[base]);
    const convertUnit = Math.pow(10, capacityMap[convert]);
    return (value * baseUnit) / convertUnit;
}
console.log(capacityConvert(1, 'kl', 'ml'));
