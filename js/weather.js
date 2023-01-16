const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "662941c92eee5f10a7d78d3f871078b6";

function onGeoOk(position) {
  //현재 위치의 위도를 반환(position의 coordinate의 latitude)
  const lat = position.coords.latitude;
  //현재 위치의 경도를 반환(position의 coordinate의 longitude)
  const lon = position.coords.longitude;
  //위에서 얻은 위치를 바탕으로 날씨를 얻기 위한 API url(unit은 섭씨인지 화씨인지 설정하는 거인듯)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);