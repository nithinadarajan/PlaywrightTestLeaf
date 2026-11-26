//29 October 2026

// ===== 1. DECLARATION =====
var carCount = 10;
let bikeCount = 20;
const truckCount = 30;
console.log("1. Declaration:", carCount, bikeCount, truckCount);
// Observation: all three are declared successfully.


// ===== 2. RE-DECLARATION =====
var studentAge = 10;
var studentAge = 20;            // allowed for var
console.log("2. var re-declared:", studentAge);   // 20

// Un-comment ONE line at a time to see the SyntaxError:
// let studentMarks = 10;
// let studentMarks = 20;       // SyntaxError: Identifier 'studentMarks' has already been declared
// const studentCity = "Chennai";
// const studentCity = "Delhi"; // SyntaxError: Identifier 'studentCity' has already been declared
// Observation: var allows re-declaration; let and const do not.


// ===== 3. RE-ASSIGNMENT =====
let letScore = 20;
letScore = 40;                  // allowed for let
console.log("3. let re-assigned:", letScore);     // 40

const constScore = 30;
try {
    constScore = 50;            // not allowed for const
} catch (error) {
    console.log("3. const re-assign:", error.name + " - " + error.message);
    // TypeError - Assignment to constant variable.
}
// Observation: let can be re-assigned; const cannot (TypeError).


// ===== 4a. BLOCK SCOPE =====
{
    var varInBlock = 1;
    let letInBlock = 2;
    const constInBlock = 3;
}
console.log("4a. var outside block:", varInBlock);   // 1 -> accessible

try {
    console.log(letInBlock);
} catch (error) {
    console.log("4a. let outside block:", error.name + " - " + error.message);
    // ReferenceError - letInBlock is not defined
}

try {
    console.log(constInBlock);
} catch (error) {
    console.log("4a. const outside block:", error.name + " - " + error.message);
    // ReferenceError - constInBlock is not defined
}
// Observation: var ignores block scope; let and const are block scoped.


// ===== 4b. FUNCTION SCOPE =====
function checkFunctionScope() {
    var varInFunction = "var";
    let letInFunction = "let";
    const constInFunction = "const";
    console.log("4b. Inside function:", varInFunction, letInFunction, constInFunction);
}
checkFunctionScope();

try {
    console.log(varInFunction);
} catch (error) {
    console.log("4b. var outside function:", error.name + " - " + error.message);
    // ReferenceError - varInFunction is not defined
}
// Observation: all three are function scoped, so none is accessible outside the function.


// ===== 5. HOISTING =====
console.log("5. var before declaration:", hoistedVar);   // undefined
var hoistedVar = 10;

try {
    console.log(hoistedLet);
    let hoistedLet = 20;
} catch (error) {
    console.log("5. let before declaration:", error.name + " - " + error.message);
    // ReferenceError - Cannot access 'hoistedLet' before initialization
}

try {
    console.log(hoistedConst);
    const hoistedConst = 30;
} catch (error) {
    console.log("5. const before declaration:", error.name + " - " + error.message);
    // ReferenceError - Cannot access 'hoistedConst' before initialization
}
// Observation: var is hoisted and initialised as undefined.
// let and const are hoisted but stay in the "temporal dead zone" until their line runs.