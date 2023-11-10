const baseURL = "https://spudlamx.github.io/wdd230/";
const linksURL = "https://spudlamx.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(weeks) {
  // Assuming you have an HTML container with id 'links-container' to display the links
  const linksContainer = document.getElementById('links-container');

  weeks.forEach(week => {
    const weekElement = document.createElement('div');
    weekElement.innerHTML = `<h3>Week ${week.lesson}</h3>`;
    
    const linksList = document.createElement('ul');

    week.links.forEach(link => {
      const linkItem = document.createElement('li');
      linkItem.innerHTML = `<a href="${link.url}" target="_blank">${link.title}</a>`;
      linksList.appendChild(linkItem);
    });

    weekElement.appendChild(linksList);
    linksContainer.appendChild(weekElement);
  });
}

// Uncomment the line below to test and log the data to the console
// getLinks();
