
//2 November 2026
function findMissingElement(numbers) {
    // Compare each element with the next one
    for (let i = 0; i < numbers.length - 1; i++) {
        let currentNumber = numbers[i];
        let nextNumber = numbers[i + 1];

        // In a consecutive sequence the difference should be 1
        if (nextNumber - currentNumber !== 1) {
            return "Missing element: " + (currentNumber + 1);
        }
    }

    return "No missing element found";
}

// Sample test data from the assignment
let testArrays = [
    [1, 2, 3, 5, 6],
    [10, 11, 12, 14, 15],
    [2, 3, 4, 6, 7, 8],
    [20, 21, 23, 24]
];

for (let i = 0; i < testArrays.length; i++) {
    console.log(`[${testArrays[i]}] -> ${findMissingElement(testArrays[i])}`);
}