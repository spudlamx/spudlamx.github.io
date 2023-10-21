const options = { year: "numeric" };
document.getElementById("currentyear").textContent =
  new Date().toLocaleDateString("en-US", options);

document.getElementById(
  "lastModified"
).innerHTML = `Last Modification: ${document.lastModified}`;
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("open");
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

// Function to calculate the wind chill factor


// Get the temperature and wind speed values from the data attributes


// Get live temperature and wind speed values (replace these with actual values)
var liveTemperature = 49; // in °F
var liveWindSpeed = 12; // in mph

// Update the data attributes with the live values
document.getElementById("temperature").setAttribute("data-value", liveTemperature);
document.getElementById("windspeed").setAttribute("data-value", liveWindSpeed);

document.getElementById("temperature").textContent = liveTemperature;
document.getElementById("windspeed").textContent = liveWindSpeed;

var temperatureInput = parseFloat(
  document.getElementById("temperature").getAttribute("data-value")
);
var windSpeedInput = parseFloat(
  document.getElementById("windspeed").getAttribute("data-value")
);

// Calculate the wind chill
function calculateWindChill(temperature, windSpeed) {
  // Check if temperature is less than or equal to 50°F and wind speed is greater than 3.0 mph
  if (temperature <= 50 && windSpeed > 3.0) {
    // Calculate wind chill using the formula
    var windChill =
      35.74 +
      0.6215 * temperature -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(1); // Round to one decimal place
  } else {
    return "N/A"; // Wind chill not applicable
  }
}

var windChillValue = calculateWindChill(temperatureInput, windSpeedInput);

// Display the wind chill value on your web page
document.getElementById("windchill").textContent =
  "Wind Chill: " + windChillValue + " °F";
