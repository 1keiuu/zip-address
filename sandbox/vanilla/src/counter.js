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
    exports.setupCounter = void 0;
    function setupCounter(element) {
        let counter = 0;
        const setCounter = (count) => {
            counter = count;
            element.innerHTML = `count is ${counter}`;
        };
        element.addEventListener('click', () => setCounter(++counter));
        setCounter(0);
    }
    exports.setupCounter = setupCounter;
});
