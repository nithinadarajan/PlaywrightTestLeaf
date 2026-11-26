// 3 November 2026

function areAnagrams(first, second) {
    // Make both lowercase and remove spaces
    first = first.toLowerCase().replaceAll(" ", "");
    second = second.toLowerCase().replaceAll(" ", "");

    // Different lengths can never be anagrams
    if (first.length !== second.length) {
        return "The strings are Not Anagrams";
    }

    // For each character, count it in both strings
    for (let i = 0; i < first.length; i++) {
        let count1 = 0;
        let count2 = 0;

        for (let j = 0; j < first.length; j++) {
            if (first[j] === first[i]) {
                count1++;
            }
            if (second[j] === first[i]) {
                count2++;
            }
        }

        // Counts differ, so not anagrams
        if (count1 !== count2) {
            return "The strings are Not Anagrams";
        }
    }

    return "The strings are Anagrams";
}

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("triangle", "integral"));
console.log(areAnagrams("hello", "world"));
console.log(areAnagrams("Debit Card", "Bad Credit"));
console.log(areAnagrams("aabb", "abbb"));