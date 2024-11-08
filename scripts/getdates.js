const currentyear = document.querySelector("#currentyear");

const today = new Date();
currentyear.innerHTML = today.getFullYear();
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

