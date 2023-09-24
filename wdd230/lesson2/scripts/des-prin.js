const options = { year: "numeric" };
document.getElementById("currentyear").textContent =
  new Date().toLocaleDateString("en-US", options);

document.getElementById(
  "lastModified"
).innerHTML = `Last Modification: ${document.lastModified}`;
