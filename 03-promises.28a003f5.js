function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r);var i=r("7Y9D8");console.log(e(i));document.querySelector("form").addEventListener("submit",(function(o){o.preventDefault();let n,t=Number(o.currentTarget.delay.value),r=Number(o.currentTarget.step.value),l=Number(o.currentTarget.amount.value);console.log(l);for(let e=1;e<=l;e+=1)n=e,u(n,t),t+=r;function u(o,n){const t=Math.random()>.3;new Promise(((e,r)=>{setTimeout((()=>{t?e({position:o,delay:n}):r({position:o,delay:n})}),n)})).then((({position:o,delay:n})=>{e(i).Notify.success(`Fulfilled promise ${o} in ${n}ms`),console.log(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((({position:o,delay:n})=>{e(i).Notify.failure(`Rejected promise ${o} in ${n}ms`),console.log(`❌ Rejected promise ${o} in ${n}ms`)}))}}));
//# sourceMappingURL=03-promises.28a003f5.js.map