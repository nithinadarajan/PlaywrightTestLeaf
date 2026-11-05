

let number1 = 0;
let number2 = 1;
let number3;
const N=5;
for(let i=0; i<=N; i++){
    number3=number1+number2;
    console.log(number3);
    number1=number2;
    number2=number3;
    
}
console.log(`Fibonacci series are: ${number3 }`);

