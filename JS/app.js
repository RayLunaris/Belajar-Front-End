import Calculator, { PI, tambah } from './utils.js';
import { tambah as add } from './utils.js';
import * as Utils from './utils.js';

console.log(PI);
console.log(tambah(5, 3));
console.log(add(10, 20));

const calc = new Calculator();
console.log(calc.kali(4, 2));

console.log(Utils.PI);
console.log(Utils.tambah(1, 2));
