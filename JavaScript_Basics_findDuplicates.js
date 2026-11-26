// 2 November 2026

function findDuplicates(numbers) {
    let duplicates = [];
    let duplicateCount = 0;

    for (let i = 0; i < numbers.length; i++) {
        // Step 1: skip this value if it already appeared earlier
        // (it was already handled on its first occurrence)
        let alreadyChecked = false;
        for (let j = 0; j < i; j++) {
            if (numbers[j] === numbers[i]) {
                alreadyChecked = true;
                break;
            }
        }
        if (alreadyChecked) {
            continue;
        }

        // Step 2: look for the same value later in the array
        for (let k = i + 1; k < numbers.length; k++) {
            if (numbers[k] === numbers[i]) {
                duplicates[duplicateCount] = numbers[i];
                duplicateCount++;
                break;   // found once, so no need to look further
            }
        }
    }

    // Build the output message
    if (duplicateCount === 0) {
        return "No duplicate values found";
    }

    let result = "Duplicate values: ";
    for (let i = 0; i < duplicateCount; i++) {
        if (i > 0) {
            result = result + ", ";
        }
        result = result + duplicates[i];
    }
    return result;
}

// Sample test data from the assignment
let testArrays = [
    [10, 20, 10, 30, 20, 40, 10],
    [1, 2, 3, 4, 5],
    [5, 5, 5, 5],
    [2, 3, 2, 3, 4]
];

for (let i = 0; i < testArrays.length; i++) {
    console.log(`[${testArrays[i]}] -> ${findDuplicates(testArrays[i])}`);
}