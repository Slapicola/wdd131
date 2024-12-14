
const completedDisplay = document.querySelector('#timesCompleted');

let numCompleted = Number(localStorage.getItem('quizesCompleted')) || 0;
if (numCompleted == 0) {
  completedDisplay.textContent = "0";
} else {
  completedDisplay.textContent = numCompleted;
}

numCompleted++;

localStorage.setItem('quizesCompleted', numCompleted);