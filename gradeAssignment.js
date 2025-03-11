//a program prompts the user to input tehir scores
let score = prompt("Enter your score:");
//converts a string to a number
score = Number(score);
//conditional statement to determine which category do they fit in.
// Excellent, GOod, Fair, or Needs Improvement.

if (score >= 90) {
    console.log("Your grade is: Excellent.");
} else if (score >= 80) {
    console.log("Your grade is: Good.");
} else if (score >= 70) {
    console.log("Your grade is: Fair.");
} else {
    console.log("Your grade is: Needs Improvement.");
}