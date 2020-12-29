var getin = document.getElementById('cityinput');
var button = document.getElementById('BTN');
var output  = document.getElementById('Showoutput');

var URL = "http://api.openweathermap.org/data/2.5/weather?q=";

var key = "7ca996688e35662b1ca3d68de68242fb";


function constructUrl(city) {
    return URL + city + "&units=metric&appid=" + key;
}


button.addEventListener('click', () => {

    var city = getin.value;

    fetch(constructUrl(city))
    .then(response => response.json())
    .then(data => {
        getin.value = " ";

        output.innerHTML = `

        <ul> 
        <li class="desc">${data.weather[0].description}</li>
        <li class="city">${data.name}</li>
        <li class="temp">${data.main.temp}°c</li>
        <ul/>
        `
    });
});

