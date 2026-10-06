// Array of scores: calculate total and average
let scores = [75, 80, 65, 90, 70, 85, 60, 95, 88, 72];

let total = 0;

for (let score of scores) {
    total += score;
}

let average = total / scores.length;

console.log("Total:", total);
console.log("Average:", average);


// Function that checks Pass or Fail
function checkResult(score) {
    if (score >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(checkResult(75));
console.log(checkResult(40));


// Employee object and template literal
let employee = {
    name: "Adiza",
    department: "IT",
    role: "Front-End Developer",
    active: true
};

console.log(
    `${employee.name} works in the ${employee.department} department as a ${employee.role}. Active status: ${employee.active}.`
);


// Loop through names and print each name with its position
let names = ["Adiza", "Amina", "Fatima", "Mary", "Hawa"];

for (let i = 0; i < names.length; i++) {
    console.log(`${i + 1}. ${names[i]}`);
}


// Function to check whether a number is even or odd
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));