// 29 October 2026

function checkPalindrome(no) {
    // Negative numbers are not palindromes
    if (no < 0) {
        return "The number is not a palindrome";
    }

    let str = String(no);   // numbers have no .length or .charAt(), so convert first
    let reverse_no = "";    // must be a string, not 0

    // Reverse for loop
    for (let i = str.length - 1; i >= 0; i--) {
        reverse_no = reverse_no + str.charAt(i);
    }

    // Both are strings, so === works
    if (str === reverse_no) {
        return "The number is a palindrome";
    } else {
        return "The number is not a palindrome";
    }
}

let testNumbers = [121, 1331, 123, -121, 10];

for (let i = 0; i < testNumbers.length; i++) {
    console.log(`${testNumbers[i]} -> ${checkPalindrome(testNumbers[i])}`);
}