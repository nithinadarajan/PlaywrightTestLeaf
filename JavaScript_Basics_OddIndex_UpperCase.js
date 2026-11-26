// 3 November 2026

function convertOddIndexToUppercase(inputText) {
    let resultText = "";

    for (let index = 0; index < inputText.length; index++) {
        let currentCharacter = inputText.charAt(index);

        // Odd index: convert to uppercase
        if (index % 2 === 1) {
            resultText = resultText + currentCharacter.toUpperCase();
        } else {
            // Even index: keep unchanged
            resultText = resultText + currentCharacter;
        }
    }

    return resultText;
}

// Sample test data from the assignment
let testStrings = ["javascript", "hello", "testleaf", "automation"];

for (let i = 0; i < testStrings.length; i++) {
    console.log(`${testStrings[i]} -> ${convertOddIndexToUppercase(testStrings[i])}`);
}