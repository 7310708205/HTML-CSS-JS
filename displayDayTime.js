let date = new Date();
let day = date.getDay();
let daysName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Today is : " + daysName[day] + ".");
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

let am_pm = hour >= 12 ? " PM ":" AM ";
hour = hour >= 12 ? hour - 12 : hour;

console.log("Current Time : " + hour + am_pm + " : " + minute + " : " + second);
