var getin = document.getElementById('cityinput');
var button = document.getElementById('BTN');


var outtemp  = document.getElementById('showtemp');
var outcityname  = document.getElementById('cityname');
var outdesc  = document.getElementById('showdesc');
var icon = document.getElementById('icon');
var iconsm = document.getElementById('iconsm');
var time = document.getElementById('time');
var date = document.getElementById('date');

let errorcod;
var condition;

var URL = "https://api.openweathermap.org/data/2.5/weather?q=";

var key = "7ca996688e35662b1ca3d68de68242fb";


function constructUrl(city) {
    return URL + city + "&units=metric&appid=" + key;
}


button.addEventListener('click', () => {
    
    
    

    
    //main
    var city = getin.value;

    fetch(constructUrl(city))
    .then(response => response.json())
    .then(data => {
        var tempout = data.main.temp;
        outtemp.innerHTML = tempout + '°c';
        
        var nameout = data.name;
        outcityname.innerHTML = nameout;
        
        var descout = data.weather[0].description;
        outdesc.innerHTML = descout;
        
        condition = data.weather[0].id;
        
        errorcod = data.cod;
        
    }).catch(function errorHandler(error) {
            console.log(errorcod);
            if (errorcod === "404") {
                alert('You Have To Enter Name of City !!');
            } else {
                console.log(error);
                alert('Please Enter a Valid City Name');
            }
        });
    
    if (condition < 300) {
        icon.innerHTML = '<img id="icon" src="image/thunder.svg" alt="Thuderstrom">';
        iconsm.innerHTML = '<img id="icon" src="image/thunder.svg" alt="Thuderstrom">';
    
    } else if (condition < 505) {
        icon.innerHTML = '<img id="icon" src="image/rainy-1.svg" alt="Thuderstrom">';
        iconsm.innerHTML = '<img id="icon" src="image/rainy-1.svg" alt="Thuderstrom">';
        
    } else if (condition === 515) {
        icon.innerHTML = '<img id="icon" src="image/snowy-1.svg" alt="Thuderstrom">';
        iconsm.innerHTML = '<img id="icon" src="image/snowy-1.svg" alt="Thuderstrom">';
        
    } else if (condition < 600) {
        icon.innerHTML = '<img id="icon" src="image/rainy-6.svg" alt="Thuderstrom">';
        iconsm.innerHTML = '<img id="icon" src="image/rainy-6.svg" alt="Thuderstrom">';
        
    } else if (condition < 700) {
        icon.innerHTML = '<img id="icon" src="image/snowy-6.svg" alt="Thuderstrom">';
        iconsm.innerHTML = '<img id="icon" src="image/snowy-6.svg" alt="Thuderstrom">';
        
    } else if (condition <= 800) {
        icon.innerHTML = '<img id="icon" src="image/thunder.svg" alt="Thuderstrom">';
        iconsm.innerHTML = '<img id="icon" src="image/thunder.svg" alt="Thuderstrom">';
        
    } else if (condition === 800) {
        icon.innerHTML = '<img id="icon" src="image/day.svg" alt="Thuderstrom">';
        iconsm.innerHTML = '<img id="icon" src="image/day.svg" alt="Thuderstrom">';
    } else {
       icon.innerHTML = '<img id="icon" src="image/cloudy..svg" alt="Thuderstrom">';
        iconsm.innerHTML = '<img id="icon" src="image/cloudy..svg" alt="Thuderstrom">';
    }
    
    //date and time
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    date.innerHTML = m + "/" + d + "/" + y;
    
    //time
    var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
 time.innerHTML    = (hour  + " : " + minute + " : " + prepand); 

    
});




