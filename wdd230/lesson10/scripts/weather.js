// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = 'da9416922b409299c45f4481a55e1005'; // Replace 'YOUR_API_KEY' with your actual API key
const latitude = '49.75'; // Replace with actual latitude of Trier, Germany
const longitude = '6.64'; // Replace with actual longitude of Trier, Germany

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  const temp = data.main.temp;
  currentTemp.innerHTML = `${temp}&deg;F`;

  const iconCode = data.weather[0].icon;
  const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', data.weather[0].description);

  const description = data.weather[0].description;
  captionDesc.textContent = `${description}`;
}

apiFetch();
