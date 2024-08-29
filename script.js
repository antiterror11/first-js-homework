//first
let a = parseFloat(prompt("1-sonni kiriting"));
let b = parseFloat(prompt("2-sonni kiriting"));
let c = parseFloat(prompt("3-sonni kiriting"));

let yigindi = a + b + c;

let all = yigindi / 3;
console.log(`bo'linma: ${all}`)

//second
let fname = prompt("please enter your first name");
let lname = prompt("now please enter your last name");
alert( `Hello  ${fname}  ${lname}`)

//third

let num1 = parseFloat(prompt("1-sonni kiriting"));
let num2 = parseFloat(prompt("2-sonni kiriting"));

let yigindi = num1 + num2;

let ayirma = num1 - num2;

let kopaytma = num1 * num2;

let bolinma = num1 / num2;

console.log(` yigindi: ${yigindi}, ayirma: ${ayirma}, kopaytma: ${kopaytma}, bolinma: ${bolinma}`);

//fourth

let num = parseFloat(prompt("selsiyni kiriting"));
let farengeyt = (num * 9/5) + 32;
let kelvin = num + 273.15;

console.log(`bu harorat frangeytda: ${farengeyt} va kelvinda: ${kelvin} boladi`)

//fifth

let uzunligi = parseFloat(prompt("uzunligini kiriting"));
let eni = parseFloat(prompt("endi enini kiriting"));

let yuzi = uzunligi * eni;

console.log(`bu tortburchakning yuzi: ${yuzi}`);