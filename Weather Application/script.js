document.getElementById('location-form').addEventListener('submit', getWeather);

async function getWeather(e) {
  e.preventDefault();
  let location = document.getElementById("location-input");
  let weatherData = document.getElementById("weather-data");
  let apiKey = "1865c20ea566d7a16b8782ff230ef12b";
  //Write you code logic here
  let api = `http://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=${apiKey}&units=metric`;
  console.log(api);

  try {
    let res = await fetch(api);
    let data = await res.json();
    weatherData.innerHTML=`<h1>${data.name}</h1><h2>${data.weather[0].main}</h2><h3>${data.main.temp}<sup>o</sup>C</h3>`;
  } catch (error) {
    weatherData.innerHTML = "Error: City not found";
  }
  location.value='';
  // Error should be very specific
  // Error: Failed to fetch weather data,   should always fetch this error in case of any failure otherwise you test cases will get failed.
}