
let input = "playwright";
let reverse_string = "";
for(let i=input.length-1;i>=0;i--){
    reverse_string = reverse_string+input.charAt(i);
}
console.log(`${reverse_string}`);