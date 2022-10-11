"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toAddress = void 0;
const address_json_1 = __importDefault(require("./assets/address.json"));
function format(input) {
    if (typeof input !== 'string' && typeof input !== 'number')
        return null;
    return input.toString().replace('-', '');
}
function toAddress(input) {
    const formatted = format(input);
    if (formatted === null)
        return '';
    const res = address_json_1.default.find((a) => {
        return a.zipCode === formatted;
    });
    if (!res)
        return null;
    return {
        zipCode: res.zipCode,
        prefectureKana: res.prefectureKana,
        cityKana: res.cityKana,
        streetKana: res.streetKana,
        prefecture: res.prefecture,
        city: res.city,
        street: res.street,
    };
}
exports.toAddress = toAddress;
