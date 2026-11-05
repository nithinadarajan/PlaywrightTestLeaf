

let input = "apple";
let reverse_string = "";
for(let i=input.length-1; i>=0;i--){
    reverse_string=reverse_string+input.charAt(i);
    
}
console.log(`Reverse of a string : ${reverse_string}`);
if(input==reverse_string){
    console.log(`${reverse_string} - The given string is a Palindrome`);
} else {
    console.log(`${reverse_string} - The given string is not a Palindrome`);
}
