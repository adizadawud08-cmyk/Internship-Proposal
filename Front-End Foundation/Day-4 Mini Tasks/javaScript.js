let employees = [
  { name: "Adiza", score: 85 },
  { name: "Fatima", score: 72 },
  { name: "Aisha", score: 65 },
  { name: "Maryam", score: 55 },
  { name: "Hassan", score: 45 }
];

function getPerformance(score) {
  if (score >= 80 && score <= 100) {
    return "Excellent";
  } else if (score >= 60) {
    return "Good";
  } else if (score >= 50) {
    return "Average";
  } else {
    return "Needs Improvement";
  }
}


for (let employee of employees) {
  let performance = getPerformance(employee.score);

  console.log(
    `${employee.name} scored ${employee.score} .Performance: ${performance}`
  );
}

