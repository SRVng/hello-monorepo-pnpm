"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomArrayNumber = void 0;
function randomArrayNumber(length) {
    const result = [];
    for (let i = 0; i <= length; i++) {
        result.push(Math.random() * 100);
    }
    return result;
}
exports.randomArrayNumber = randomArrayNumber;
