"use strict";
var massMap;
(function (massMap) {
    massMap[massMap["mg"] = -3] = "mg";
    massMap[massMap["cg"] = -2] = "cg";
    massMap[massMap["dg"] = -1] = "dg";
    massMap[massMap["g"] = 0] = "g";
    massMap[massMap["dag"] = 1] = "dag";
    massMap[massMap["hg"] = 2] = "hg";
    massMap[massMap["kg"] = 3] = "kg";
})(massMap || (massMap = {}));
function massConvert(value, base, convert) {
    const baseUnit = Math.pow(10, massMap[base]);
    const convertUnit = Math.pow(10, massMap[convert]);
    return (value * baseUnit) / convertUnit;
}
console.log(massConvert(1, 'g', 'kg'));
