let student = "Sudharsan";
let marks = [85, 72, 90, 65, 88];
console.log("STUDENT MARKS ANALYZER");
console.log("---------------------");
console.log("Student Name:", student);
console.log("All Marks:", marks);
marks[3]=89;
console.log("Updated marks",marks);

let total = 0;
for (let mark of marks) {
    total = total + mark;
}

console.log(marks);
console.log("Total Marks:", total);
let average=total / marks.length;
console.log("Average:", average);
let highMarks=marks.filter(mark => mark > 80);
console.log("Marks Above 80:", highMarks);
let sortedMarks=[...marks].sort((a, b) => a - b);

console.log("Sorted Marks:", sortedMarks);

if (marks.every(mark => mark >= 35)) {
    console.log("Result: PASS");
} else {
    console.log("Result: FAIL");
}
