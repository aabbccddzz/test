'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var dog = { type: 'animal', many: 2 };
var type = dog.type,
    many = dog.many;

console.log(type, many);
console.log(dog);
console.log(typeof type === 'undefined' ? 'undefined' : _typeof(type));