const options = { year: "numeric" };
document.getElementById("currentyear").textContent =
  new Date().toLocaleDateString("en-US", options);

// document.getElementById(
//   "lastModified"
// ).innerHTML = `Last Modification: ${document.lastModified}`;
// const hamButton = document.querySelector('#menu');
// const navigation = document.querySelector('.navigation');

// hamButton.addEventListener('click', () => {
//   navigation.classList.toggle('open');
//   hamButton.classList.toggle('open');
// });
