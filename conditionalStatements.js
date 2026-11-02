var number = -6;

if(number == 0) {
    console.log("The number is zero");
} else if (number >=0 && number % 2 === 0 ){
    console.log("The number is positive even number");
} else if (number >=0 && number % 2!== 0){
    console.log("The number is Positive odd number");
} else if (number < 0 && number % 2 ===0){
     console.log("The number is Negative even number");

} else {
     console.log("The number is Negative odd number");
}
