/**
 * Minified by jsDelivr using Terser v5.15.0.
 * Original file: /npm/@metamask/detect-provider@2.0.0/dist/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
"use strict";function detectEthereumProvider({mustBeMetaMask:e=!1,silent:t=!1,timeout:o=3e3}={}){!function(){if("boolean"!=typeof e)throw new Error("@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.");if("boolean"!=typeof t)throw new Error("@metamask/detect-provider: Expected option 'silent' to be a boolean.");if("number"!=typeof o)throw new Error("@metamask/detect-provider: Expected option 'timeout' to be a number.")}();let r=!1;return new Promise((n=>{function i(){if(r)return;r=!0,window.removeEventListener("ethereum#initialized",i);const{ethereum:o}=window;if(!o||e&&!o.isMetaMask){const r=e&&o?"Non-MetaMask window.ethereum detected.":"Unable to detect window.ethereum.";!t&&console.error("@metamask/detect-provider:",r),n(null)}else n(o)}window.ethereum?i():(window.addEventListener("ethereum#initialized",i,{once:!0}),setTimeout((()=>{i()}),o))}))}module.exports=detectEthereumProvider;
//# sourceMappingURL=/sm/17a32e99987e77eef582d3d1c4200837067644b5b4ff47c93c59ddcb82b65191.map