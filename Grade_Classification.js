//28 October 2026 
function classifyGrade(studentMark) {
    // Check for the valid range (0-100) first
    if (studentMark < 0 || studentMark > 100) {
        return "Invalid mark";
    } else if (studentMark >= 90) {
        return "Grade A";
    } else if (studentMark >= 80) {
        return "Grade B";
    } else if (studentMark >= 70) {
        return "Grade C";
    } else if (studentMark >= 60) {
        return "Grade D";
    } else if (studentMark >= 50) {
        return "Grade E";
    } else {
        return "Grade F (Fail)";
    }
}

// Sample test data and boundary values
let testMarks = [95, 85, 75, 65, 55, 35, -5, 105, 100, 90, 89, 80, 50, 49, 0];

for (let i = 0; i < testMarks.length; i++) {
    console.log(`Mark ${testMarks[i]} -> ${classifyGrade(testMarks[i])}`);
}