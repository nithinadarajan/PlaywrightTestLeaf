
const number = 12345;
const text = String(number);
let sum = 0;
for(let i=0;i<text.length;i++){
    sum = sum + Number(text[i]);
}
console.log(`Sum of digits: ${sum}`);