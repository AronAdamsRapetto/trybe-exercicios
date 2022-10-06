"use strict";
var volumeMap;
(function (volumeMap) {
    volumeMap[volumeMap["mm\u00B3"] = -9] = "mm\u00B3";
    volumeMap[volumeMap["cm\u00B3"] = -6] = "cm\u00B3";
    volumeMap[volumeMap["dm\u00B3"] = -3] = "dm\u00B3";
    volumeMap[volumeMap["m\u00B3"] = 0] = "m\u00B3";
    volumeMap[volumeMap["dam\u00B3"] = 3] = "dam\u00B3";
    volumeMap[volumeMap["hm\u00B3"] = 6] = "hm\u00B3";
    volumeMap[volumeMap["km\u00B3"] = 9] = "km\u00B3";
})(volumeMap || (volumeMap = {}));
;
function volumeConvert(value, base, convert) {
    const baseUnit = Math.pow(10, volumeMap[base]);
    const convertUnit = Math.pow(10, volumeMap[convert]);
    return (value * baseUnit) / convertUnit;
}
console.log(volumeConvert(1, 'km³', 'mm³'));
