const baseURL = "https://spudlamx.github.io/wdd230/";
const linksURL = "https://spudlamx.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.lessons);
}

function displayLinks(weeks) {
  const linksContainer = document.getElementById('links-container');
  const linksList = document.createElement('ul');

  weeks.forEach(week => {
    const weekItem = document.createElement('li');
    weekItem.innerHTML = `Week ${week.lesson}: `;
    
    week.links.forEach((link, index) => {
      const linkItem = document.createElement('a');
      linkItem.href = `${baseURL}${link.url}`;
      linkItem.textContent = link.title;

      weekItem.appendChild(linkItem);

      if (index < week.links.length - 1) {
        const separator = document.createTextNode(' | ');
        weekItem.appendChild(separator);
      }
    });

    linksList.appendChild(weekItem);
  });

  linksContainer.appendChild(linksList);
}

getLinks();
