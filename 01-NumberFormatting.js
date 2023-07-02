/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const numbertext = readline();

let numbers = numbertext.match(/\d+(\.?\d+)?/gi);

if (!numbers) {
  console.log(numbertext);
  return;
}

const str = (numbers.join("") / 2).toString().split(".");

let str1 = str[0].startsWith("0") ? "".padStart(9, "x") : str[0].padStart(9, "x");
let str2 = str[1] ? str[1].padEnd(6, "x") : "".padEnd(6, "x");

const result1 = [str1[0], ...str1.slice(1)]
  .map((char, index) => (index % 3 === 0 && index !== 0 ? "," + char : char))
  .join("");

const result2 = [str2[0], ...str2.slice(1)]
  .map((char, index) => (index % 3 === 0 && index !== 0 ? "." + char : char))
  .join("");

console.log([result1, result2].join("."));
