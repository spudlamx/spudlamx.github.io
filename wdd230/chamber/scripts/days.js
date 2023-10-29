// Get the current date in milliseconds
const currentDate = Date.now();

// Retrieve the last visit date from localStorage
const lastVisitDate = localStorage.getItem("lastVisitDate");

// Check if this is the user's first visit
if (!lastVisitDate) {
  // First visit
  localStorage.setItem("lastVisitDate", currentDate);
  document.getElementById("days").textContent = "Welcome! Let us know if you have any questions.";
} else {
  // Calculate the time between visits in milliseconds
  const timeBetweenVisits = currentDate - parseInt(lastVisitDate, 10);

  // Convert milliseconds to days
  const daysBetweenVisits = Math.floor(timeBetweenVisits / (1000 * 60 * 60 * 24));

  // Display the appropriate message based on the number of days
  if (daysBetweenVisits < 1) {
    document.getElementById("days").textContent = "Back so soon! Awesome!";
  } else if (daysBetweenVisits === 1) {
    document.getElementById("days").textContent = "You last visited 1 day ago.";
  } else {
    document.getElementById("days").textContent = `You last visited ${daysBetweenVisits} days ago.`;
  }

  // Update the last visit date in localStorage
  localStorage.setItem("lastVisitDate", currentDate);
}
