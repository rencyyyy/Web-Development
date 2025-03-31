
// CJS - CommonJS:
// var generateName = require("sillyname");

// var sillyname = generateName();

// console.log(`My name is ${sillyname}`);

// ---------------------------------------------------------------------------

// ESM - EcmaScript Module

import generateName from "sillyname";

const randomName = generateName();

console.log(`My name is ${randomName}`);