const baseURL = "https://spudlamx.github.io/wdd230/";
const linksURL = "/Users/spencerlamoreaux/Documents/BYU-I/2023 Fall/Web design/wdd230/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
  }
  
  function displayLinks(weeks) {
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
  
  getLinks();