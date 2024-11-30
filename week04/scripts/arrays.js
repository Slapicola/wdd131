//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}<li>`;//the html string made from step
}
const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join();// set the innerHTML

const grades = ['A', 'B', 'A'];
function gpa(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4;
    } else if (grade === 'B') {
        points = 3;
    }
    return points;
}

const convertedGrades = grades.map(gpa);

const pointsTotal = convertedGrades.reduce((totalGpa, grade) => totalGpa + grade);
const gpaPoints = pointsTotal / convertedGrades.length;

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const small = fruits.filter((fruit) => fruit.length < 6);

const numbers = [12, 34, 21, 54];
const luckyNum = 21;
let isIn = numbers.indexOf(luckyNum);