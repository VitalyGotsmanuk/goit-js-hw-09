!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r);var i=r("6JpON");console.log(e(i)),document.querySelector("form").addEventListener("submit",(function(o){o.preventDefault();var n=Number(o.currentTarget.delay.value),t=Number(o.currentTarget.step.value),r=Number(o.currentTarget.amount.value);console.log(r);for(var c=1;c<=r;c+=1)a(c,n),n+=t;function a(o,n){var t=Math.random()>.3;new Promise((function(e,r){setTimeout((function(){t?e({position:o,delay:n}):r({position:o,delay:n})}),n)})).then((function(o){var n=o.position,t=o.delay;e(i).Notify.success("Fulfilled promise ".concat(n," in ").concat(t,"ms")),console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(o){var n=o.position,t=o.delay;e(i).Notify.failure("Rejected promise ".concat(n," in ").concat(t,"ms")),console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.b6f239d5.js.map