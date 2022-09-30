//Asynchronus

printAdd=()=>{
    setTimeout(()=>{console.log("Addition of two numbers ");},1000);
}
addition=(a,b)=>{
    return a+b;
}
console.log(addition(4,6))

//------------------------------------------------------------------

//Callback

multiplication=(a, b, callback)=> {
    let product = callback(a, b);
    console.log("Multiplication is: " + product);
}
function callback(a, b) {
    return a * b;
}
multiplication(7, 8, callback)

//------------------------------------------------------------------

//Promises

Add=(a,b)=> {
    return new Promise((resolve,reject) => {
      let sum = a + b;
      if (sum) {
        resolve(sum);
      }
      else {
        reject("Numbers cannot be added");
      }
    });
}

Add().catch((err)=>{console.log("Exception : "+err)})

//------------------------------------------------------------------

//Async and await

sum=(a, b)=>{
    return a+b;
}
    
multiply=(a, b)=>{
    return a*b;
} 

console.log(sum(5, 6));
console.log(sum(4, 8));
setTimeout(()=>{console.log("Addition and multiplication done");},1000);

async function menu()
{
    await sum();
    await multiply();
}
menu();