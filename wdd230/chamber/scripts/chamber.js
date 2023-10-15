const options = { year: "numeric" };
document.getElementById("currentyear").textContent =
  new Date().toLocaleDateString("en-US", options);

document.getElementById(
  "lastModified"
).innerHTML = `Last Modification: ${document.lastModified}`;
const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  menuButton.classList.toggle('open');
});

const modeButton = document.querySelector("input[type='checkbox']");
const main = document.querySelector("main");
const header = document.querySelector("header");
const sections = document.querySelectorAll("section");
const divs = document.querySelectorAll("div");
const nav = document.querySelector("nav");
const body = document.querySelector("body");

modeButton.addEventListener("change", () => {
  if (modeButton.checked) {
    // Dark mode
    main.style.background = "#353535";
    body.style.background = "#353535";
    main.style.color = "#fff";
    nav.style.background = "#000";

    // Apply dark mode styles to all sections
    sections.forEach((section, i) => {
      section.style.background = "white";
      section.style.color = "#353535";
    });
    divs.forEach((div, i) => {
      div.style.background = "#353535";
      div.style.color = "white";
    });
  } else {
    // Light mode (you can set these to your light mode colors)
    main.style.background = "initial"; // Reset to default background
    body.style.background = "initial"; // Reset to default background
    main.style.color = "initial"; // Reset to default text color
    nav.style.background = "#515151";

    // Reset styles for all sections
    sections.forEach((section, i) => {
      section.style.background = "#515151";
      section.style.color = "white";
    });
    divs.forEach((div, i) => {
      div.style.background = "white";
      div.style.color = "#353535";
    });
  }
});
