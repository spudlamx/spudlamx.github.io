const apiKey = 'da9416922b409299c45f4481a55e1005';
const latitude = '43.49'; //Latitude of Idaho Falls, Idaho
const longitude = '-112.04'; //Longitude of Idaho Falls, Idaho
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

// Function to get current weather data
async function getCurrentWeather() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const currentTemp = data.main.temp;
    const weatherDesc = data.weather[0].description;

    document.getElementById('currentTemp').textContent = `${currentTemp}°F`;
    document.getElementById('weatherDesc').textContent = weatherDesc;
  } catch (error) {
    console.log('Error fetching current weather:', error);
  }
}

// Function to get three-day forecast
async function getThreeDayForecast() {
    try {
      const response = await fetch(forecastUrl);
      const data = await response.json();
  
      const forecastData = data.list.slice(0, 3); // Extracting the first three entries
  
      const forecastContainer = document.getElementById('forecast');
      forecastContainer.innerHTML = '';
  
      let currentDate = new Date(); // Initialize with current date
  
      forecastData.forEach(forecast => {
        const date = new Date(forecast.dt * 1000);
        currentDate.setDate(currentDate.getDate() + 1); // Increment the date for each forecasted day
        const day = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
        const temp = forecast.main.temp_max;
        const temp_min = forecast.main.temp_min;
        const weatherDesc = forecast.weather[0].description;
  
        const forecastElement = document.createElement('div');
        forecastElement.classList.add('infoPad');
        forecastElement.innerHTML = `<h3>${day}</h3> <p>High: ${temp}°F<br> Low: ${temp_min}°F <br> ${weatherDesc}.</p>`;
        forecastContainer.appendChild(forecastElement);
      });
    } catch (error) {
      console.log('Error fetching forecast:', error);
    }
  }
  

// Fetch current weather and three-day forecast when the page loads
window.onload = function () {
  getCurrentWeather();
  getThreeDayForecast();
};
