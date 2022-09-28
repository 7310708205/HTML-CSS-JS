var sum=0
function add(num) {
    for(let i=0; i<=num; i++) {
        sum = sum+i;
    }
    return sum;
}
const s = add(600);
console.log(s)