// getting the needed DOM elements
let currentCity = document.getElementById('current-city');
let iconElem = document.getElementById('icon');
let tempElem = document.getElementById('temp');
let weatherElem = document.getElementById('weather');
let cities = document.querySelectorAll('.cities span');

cities.forEach(city => {
    city.addEventListener('click', changeCity);
});

function changeCity() {
    currentCity.innerText = this.innerText;

    const api = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${currentCity.innerText}&units=Metric&APPID=17a70afbd666af83570c2f4299bfb2d3`;

    fetch(api)
        .then(response => response.text())
        .then(apiData => {
            let data = JSON.parse(apiData);

            console.log(data);

            let icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            iconElem.setAttribute('src', icon);

            weatherElem.innerText = `${data.weather[0].main} | ${data.weather[0].description}`;

            let temp = Math.floor(data.main.temp);
            tempElem.innerHTML = `${temp}&deg;C`;

        })   
        .catch(error => console.log(error))
    ;
}