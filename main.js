// export function arr(arr) {
//   return arr.filter((num) => num % 2 === 0).reduce((res, num) => res + num, 0);
// }

// export function arr(arr) {
//     return arr.filter((num) => num % 2 === 0);
//   }

// export function arr(arr) {
//   return Math.max(...arr) - Math.min(...arr);
// }

// export function arr(arr) {
//   return [...arr].reverse();
// }

// export function arr(arr, value) {
//   return arr.filter((num) => num === value).length;
// }

// export function arr(arr) {
//   return arr.slice().sort((a, b) => a.length - b.length);
// }

// export function arr(arr) {
//   const num = Math.ceil(arr.length / 2);
//   return [arr.slice(0, num), arr.slice(num)];
// }

// export function arr(arr) {
//   return arr.filter((num) => num > 0);
// }

// export function arr(arr) {
//   const sum = arr.reduce((res, num) => res + num, 0);
//   return sum / arr.length;
// }

// export function arr(arr) {
//   return arr.map((text) => text.toUpperCase());
// }

// export function arr(arr) {
//   const min = arr.reduce((res, text) =>
//     text.length < res.length ? text : res
//   );
//   const max = arr.reduce((res, text) =>
//     text.length > res.length ? text : res
//   );
//   return [min, max];
// }

// export function arr(arr) {
//   return arr.map((num) => String(num));
// }

// export function arr(str) {
//   return str.split(" ").reverse().join(" ");
// }

// export function arr(str) {
//   return str
//     .split(" ")
//     .sort((a, b) => a.length - b.length)
//     .join(" ");
// }

// export function arr(str, word) {
//   return str.split(" ").filter((num) => num === word).length;
// }

// export function arr(str) {
//   return str
//     .split("")
//     .map((text) =>
//       text === text.toLowerCase() ? text.toUpperCase() : text.toLowerCase()
//     )
//     .join("");
// }

// export function arr(str) {
//   return (str.match(/\d/g) || []).reduce((res, num) => res + Number(num), 0);
// }

// export function arr(str) {
//   return str.split("").reverse().join("");
// }

// export function arr(str) {
//   return str
//     .split(" ")
//     .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
//     .join(" ");
// }

// export function arr(str) {
//   return str.split(" ").sort();
// }

// export function arr(arr) {
//   return arr.join(" ");
// }

// export function arr(arr) {
//   return arr.reduce((res, text) => (text.length > res.length ? text : res));
// }

// export function arr(arr) {
//   return arr.map((text) => text.split("").reverse().join(""));
// }

// export function arr(str) {
//   const words = str.split(" ");
//   return words.filter((text, index, self) => self.indexOf(text) === index);
// }
