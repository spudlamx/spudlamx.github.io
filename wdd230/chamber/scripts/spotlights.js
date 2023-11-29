const memURL = 'data/members.json'; // Assuming members.json is in the data folder
const spotlightContainer = document.querySelector('.ads');

async function getspotlightData() {
  try {
    const response = await fetch(memURL);
    const data = await response.json();
    console.table(data.members);
    displaySpotlight(data.members);
  } catch (error) {
    console.error('Error fetching member data:', error);
  }
}

getspotlightData();

const displaySpotlight = (members) => {
    // Filter members with membership level Gold or Silver
    const goldSilverMembers = members.filter(member => member.membership_level === 'Gold' || member.membership_level === 'Silver');
  
    // Shuffle the goldSilverMembers array to get random members
    const shuffledMembers = shuffleArray(goldSilverMembers);
  
    // Select three random members
    const randomThreeMembers = shuffledMembers.slice(0, 3);
  
    randomThreeMembers.forEach((member) => {
      let memberDiv = document.createElement('div');
      memberDiv.classList.add('infoPad');
  
      let nameHeading = document.createElement('h2');
      let addressParagraph = document.createElement('p');
      let phoneParagraph = document.createElement('p');
      let websiteParagraph = document.createElement('p');
      let imageElement = document.createElement('img');
      let membershipLevelParagraph = document.createElement('p');
  
      nameHeading.textContent = member.name;
      addressParagraph.textContent = `Address: ${member.address}`;
      phoneParagraph.textContent = `Phone: ${member.phone}`;
      websiteParagraph.innerHTML = `<a href="${member.website}" target="_blank">🌐 Visit Website</a>`;
  
      imageElement.setAttribute('src', `images/${member.image}`);
      imageElement.setAttribute('alt', `Image of ${member.name}`);
      imageElement.setAttribute('loading', 'lazy');
      imageElement.setAttribute('width', '200');
      imageElement.setAttribute('height', '200');
  
      membershipLevelParagraph.textContent = `Membership Level: ${member.membership_level}`;
  
      memberDiv.appendChild(nameHeading);
      memberDiv.appendChild(addressParagraph);
      memberDiv.appendChild(phoneParagraph);
      memberDiv.appendChild(websiteParagraph);
      memberDiv.appendChild(imageElement);
      memberDiv.appendChild(membershipLevelParagraph);
  
      spotlightContainer.appendChild(memberDiv);
    });
  };
  
  // Function to shuffle array elements (Fisher-Yates shuffle)
  function shuffleArray(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  