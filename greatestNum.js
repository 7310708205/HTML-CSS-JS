const num1 = 10
const num2 = 15
const num3 = 25

let largestNum;

if(num1 >= num2 && num1 >= num3) {
    largestNum = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largestNum = num2;
}
else {
    largestNum = num3;
}

console.log("The greatest number is " + largestNum);