"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ownKeys(object) {
    if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
        return Reflect.ownKeys(object);
    }
    var keys = Object.getOwnPropertyNames(object);
    if (typeof Object.getOwnPropertySymbols === 'function') {
        keys = keys.concat(Object.getOwnPropertySymbols(object));
    }
    return keys;
}
exports.default = ownKeys;
