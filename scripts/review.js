const currentyear = document.querySelector("#currentyear");

const today = new Date();
currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

const completedDisplay = document.querySelector('#completed');

let numReviews = Number(localStorage.getItem('reviewsCompleted')) || 0;
if (numReviews == 0) {
  completedDisplay.textContent = "0";
} else {
  completedDisplay.textContent = numReviews;
}

numReviews++;

localStorage.setItem('reviewsCompleted', numReviews);