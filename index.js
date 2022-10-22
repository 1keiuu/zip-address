var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "axios"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toAddress = void 0;
    const axios_1 = __importDefault(require("axios"));
    function format(input) {
        if (typeof input !== 'string' && typeof input !== 'number')
            return null;
        return input.toString().replace('-', '');
    }
    function fetchAddress(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const formatted = format(input);
            if (formatted === null)
                return null;
            const zipCode3 = formatted.substring(0, 3);
            const res = yield axios_1.default
                .get(`https://cdn.jsdelivr.net/npm/zip-address-data/address/${zipCode3}.json`)
                .then((res) => {
                return res.data.find((address) => {
                    return address.zipCode === formatted;
                });
            });
            if (!res)
                return null;
            return res;
        });
    }
    function toAddress(input) {
        return fetchAddress(input);
    }
    exports.toAddress = toAddress;
});
