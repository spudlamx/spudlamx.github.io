// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const weatherP = document.querySelector('#weatherTxt')

const apiKey = 'da9416922b409299c45f4481a55e1005';
const latitude = '43.67'; //Latitude of Rigby Idaho
const longitude = '-111.91'; //Longitude of Rigby Idaho

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
//   currentTemp.innerHTML = `${temp}&deg;F`;

  const iconCode = data.weather[0].icon;
  const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', data.weather[0].description);

  const description = data.weather[0].description;
//   captionDesc.textContent = `${description}`;

  weatherP.innerHTML = `${temp}&deg;F - ${description}`;
}

apiFetch();
