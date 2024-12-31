/** Tipe Data Primitif */

// String
const nama = "firya";

// Number
const umur = 34;

// Boolean
const isMarried = false;

// Undefined
let x;

// null
let person = null;

// Symbol
const symbol = Symbol("description 1");

// BigInt
const bigInt = 27864816487632487263476n;

/** Tipe Data References */

// Object
const orang = {
  name: "Firya Faturahman",
  age: 34,
  country: "Indonesia",
};

// Array
const foodFavorite = ["ketoprak", "mie ayam", "gado-gado"];

// Function
const greeting = () => {
  return `halo , selamat malam`;
};

let a = 5;
let b = 6;

function sum() {
  return (result = a + b);
}
const output = sum();

console.log(output, typeof output);
