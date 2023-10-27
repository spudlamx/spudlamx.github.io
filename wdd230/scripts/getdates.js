const options = { year: "numeric" };
document.getElementById("currentyear").textContent =
  new Date().toLocaleDateString("en-US", options);

document.getElementById(
  "lastModified"
).innerHTML = `Last Modification: ${document.lastModified}`;
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
});


const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. Welcome!`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
