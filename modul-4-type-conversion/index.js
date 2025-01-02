/** Implicit Conversion */

// let hasilPenjumlahan = "22" + 20;
let hasilPengurangan = "bcd" - 20;
// let hasilPerkalian = "22" * 20;
// let hasilPembagian = "22" / 20;
// let hasilSisaBagi = "22" % 20;

// console.log(hasilPenjumlahan, typeof hasilPenjumlahan);
console.log(hasilPengurangan, typeof hasilPengurangan);
// console.log(hasilPerkalian, typeof hasilPerkalian);
// console.log(hasilPembagian, typeof hasilPembagian);
// console.log(hasilSisaBagi, typeof hasilSisaBagi);

// falsy value, terdiri dari 0, null, undefined, ""

// let valueNol = !0;
// let valueNull = !null;
// let valueUndefined = !undefined;
// let valueEmptyString = !"";

// console.log(valueNull, typeof valueNull);
// console.log(valueUndefined, typeof valueUndefined);
// console.log(valueEmptyString, typeof valueEmptyString);

/** Eksplit Conversion */

let num = 200;

let conversion = num.toString(); // number to string
let conversionStrToNum = parseInt("100");
let conversionStrToFloat = parseFloat("100.22");
let conversionBool = Boolean(!null);

console.log(conversionBool, typeof conversionBool);
