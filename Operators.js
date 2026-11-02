//1.Assignment operator
var a = 10;
var b = 5;

//2.Arithmetic operator - add,sub,mul,div,%
console.log(a+b);

console.log(a-b);

console.log(a*b);

console.log(a/b); //To get quotient

console.log(a%b); //To get remainder

console.log(Math.floor(a/b));

//3.Comparison operator - If both values correct, it will return true, else false
//<-smaller than, >-greater than, <= - smaller than or equal to, >= - greater than or equal to, 
// == - equal to, != - not equal to, == - loose equal(only compare values) ,
//  === - strict equality(compares both values and datatypes)

var c=10;
var d=20;
console.log(c<d);
console.log(c>d);
console.log(c<=d);
console.log(c>=d);
console.log(a==b);

var p=true;
var q=1;
console.log(p==q);
console.log(p===q);

//4.Increment operator - Increase the value of a variable by 1, post(after) variable++ and pre(before) increment ++variable
//Decrement operator - Decrease the value of a variable by 1

var v=7;
console.log(v++); //cannot be seen in current iteration
console.log(v);
console.log(++v);

console.log(v--);
console.log(v);
console.log(--v);

//5.Logical operator - AND/OR

var x=10;
var y=20;

console.log(x>y && x<y);
console.log(x>y || x<y);





