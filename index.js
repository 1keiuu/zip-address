(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toAddress = void 0;
    function format(input) {
        if (typeof input !== 'string' && typeof input !== 'number')
            return null;
        return input.toString().replace('-', '');
    }
    async function fetchAddress(input) {
        const formatted = format(input);
        if (formatted === null)
            return null;
        const zipCode3 = formatted.substring(0, 3);
        const res = await fetch(`https://cdn.jsdelivr.net/npm/zip-address-data/address/${zipCode3}.json`)
            .then((res) => {
            return res.json();
        })
            .then((data) => {
            return data.find((address) => {
                return address.zipCode === formatted;
            });
        });
        if (!res)
            return null;
        return res;
    }
    function toAddress(input) {
        return fetchAddress(input);
    }
    exports.toAddress = toAddress;
});
