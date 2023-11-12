const url = 'data/members.json'; // Assuming members.json is in the data folder
const membersContainer = document.querySelector('#members');

async function getMembersData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
  } catch (error) {
    console.error('Error fetching member data:', error);
  }
}

getMembersData();

const displayMembers = (members) => {
  members.forEach((member) => {
    // Create elements to add to the membersContainer element
    let memberSection = document.createElement('section');
    let nameHeading = document.createElement('h2');
    let addressParagraph = document.createElement('p');
    let phoneParagraph = document.createElement('p');
    let websiteParagraph = document.createElement('p');
    let imageElement = document.createElement('img');
    let membershipLevelParagraph = document.createElement('p');

    // Build the h2 content to show the member's name
    nameHeading.textContent = member.name;

    // Build the paragraph element for address
    addressParagraph.textContent = `Address: ${member.address}`;

    // Build the paragraph element for phone
    phoneParagraph.textContent = `Phone: ${member.phone}`;

    // Build the paragraph element for website
    websiteParagraph.innerHTML = `<a href="${member.website}" target="_blank">Visit</a>`;

    // Build the image element by setting all the relevant attributes
    imageElement.setAttribute('src', `images/${member.image}`);
    imageElement.setAttribute('alt', `Image of ${member.name}`);
    imageElement.setAttribute('loading', 'lazy');
    imageElement.setAttribute('width', '200');
    imageElement.setAttribute('height', '200');

    // Build the paragraph element for membership level
    membershipLevelParagraph.textContent = `Membership Level: ${member.membership_level}`;

    // Append the memberSection with the created elements
    memberSection.appendChild(nameHeading);
    memberSection.appendChild(addressParagraph);
    memberSection.appendChild(phoneParagraph);
    memberSection.appendChild(websiteParagraph);
    memberSection.appendChild(imageElement);
    memberSection.appendChild(membershipLevelParagraph);

    membersContainer.appendChild(memberSection);
  });
};


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#members");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
