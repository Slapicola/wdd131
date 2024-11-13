const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// Write a for loop that will iterate through the studentReport array and print to the console the current array value if it is below 30.
for (let i = 0; i < studentReport.length; i++) {
    let report = studentReport[i];
    if (report < LIMIT) {
        console.log(report);
    }
}

// Repeat the previous programming snippet by using a while loop.
let i = 0;
while (i < studentReport.length) {
    let report = studentReport[i];
    if (report < LIMIT) {
        console.log(report);
    }
    i++;
}

//Repeat the previous programming snippet by using a forEach loop.
studentReport.forEach(function(i) {
    if (i < LIMIT) {
        console.log(i);
    }
});

//Repeat the previous programming snippet by using a for...in loop.
for (let report in studentReport) {
    if (studentReport[report] < LIMIT) {
        console.log(studentReport[report]);
    }
}

//Use any type of repetition (looping) statement to dynamically produce the day names (Monday, Tuesday, Wednesday, etc.) of the next
// number of DAYS from today's date.
let today = new Date();
const options = {weekday: 'long'};

for (let i = 1; i <= DAYS; i++) {
    let nextDay = new Date();
    nextDay.setDate(today.getDate() + i);
    let nextDayString = new Intl.DateTimeFormat('en-US', options).format(nextDay);
    console.log(nextDayString);
}