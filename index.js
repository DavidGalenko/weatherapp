var DATA;

let weather = {
    "apiKey": "1c59bf0639f595642bcd71b39bd7fdd9",
    fetchWeather: function(city) {
        fetch(
            "https://pro.openweathermap.org/data/2.5/forecast/daily?q=" 
            + city 
            + "&cnt=3&units=imperial&appid=" 
            + this.apiKey
        ).then((response) => response.json())
         .then((data) => this.displayWeather(data));

         fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=imperial&appid=" 
            + this.apiKey
        ).then((response) => response.json())
         .then((curr) => this.currentWeather(curr));
    },
    displayWeather: function(data){
        DATA = data;

        if(data.cod < 400){
            document.querySelector(".container").classList.remove("load");
            document.querySelector(".cityName").classList.remove("load");
            document.body.style.backgroundImage = "url('https://source.unsplash.com/weekly?" + data.city.name + "')";
        
        var { icon, description } = data.list[0].weather[0];
        var { min, max} = data.list[0].temp;
        var { gust,  humidity } = data.list[0];
        max = Math.round(max);
        min = Math.round(min);
        gust = Math.round(gust);
        document.querySelector(".city").innerText = "Weather in " + data.city.name;
        document.querySelector(".icon1").src = 
        "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description1").innerText = description;
        document.querySelector(".min1").innerText = "Min: " + min + "°F";
        document.querySelector(".max1").innerText = "Max: " + max + "°F";
        document.querySelector(".humidity1").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".speed1").innerText = "Wind Speed: "+ gust + "mph";

        var { icon, description } = data.list[1].weather[0];
        var { min, max } = data.list[1].temp;
        var { gust,  humidity } = data.list[1];
        max = Math.round(max);
        min = Math.round(min);
        gust = Math.round(gust);
        document.querySelector(".icon2").src = 
        "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description2").innerText = description;
        document.querySelector(".min2").innerText = "Min: " + min + "°F";
        document.querySelector(".max2").innerText = "Max: " + max + "°F";
        document.querySelector(".humidity2").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".speed2").innerText = "Wind Speed: "+ gust + "mph";

        var { icon, description } = data.list[2].weather[0];
        var { min, max } = data.list[2].temp;
        var { gust,  humidity } = data.list[2];
        max = Math.round(max);
        min = Math.round(min);
        gust = Math.round(gust);
        document.querySelector(".icon3").src = 
        "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description3").innerText = description;
        document.querySelector(".min3").innerText = "Min: " + min + "°F";
        document.querySelector(".max3").innerText = "Max: " + max + "°F";
        document.querySelector(".humidity3").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".speed3").innerText = "Wind Speed: "+ gust + "mph";
        }
    },
    currentWeather: function(data){
        if(data.cod < 400){
            var { temp } = data.main;
            temp = Math.round(temp);
            document.querySelector(".current").innerText = "Temp Now: " + temp + "°F";
        }
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
    moreInfo: function(num){
        var { icon, description } = DATA.list[num].weather[0];
        var { min, max } = DATA.list[num].temp;
        var { gust, clouds, sunrise, sunset, humidity, pressure } = DATA.list[num];
        max = Math.round(max);
        min = Math.round(min);
        gust = Math.round(gust);
        sunrise = new Date(sunrise * 1000).toTimeString();
        sunset = new Date(sunset * 1000).toTimeString();
        pressure = (pressure / 33.864).toFixed(2);
    
        document.querySelector(".info-icon").src = 
        "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".info-desc").innerText = description;
        document.querySelector(".info-min").innerText = "Min Temp: " + min;
        document.querySelector(".info-max").innerText = "Max Temp: " + max;
        document.querySelector(".sunrise").innerText = "Sunrise: " + sunrise;
        document.querySelector(".sunset").innerText = "Sunset: " + sunset;
        document.querySelector(".info-wind").innerText = "Wind Speed: " + gust + "mph";
        document.querySelector(".info-humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".pressure").innerText = "Pressure: " + pressure + "Hg";
        document.querySelector(".cloudprec").innerText = "Clouds: " + clouds + "%";
    }
};

document.querySelector(".sbox button").addEventListener("click", function() {
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if(event.key == "Enter"){
        weather.search();
    }
});

var today = new Date();
var dd = String(today.getDate());
var mm = String(today.getMonth());
var yr = String(today.getFullYear());
const months = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];
var tod = months[mm] + " " + dd;
dd++;
var tom = document.querySelector(".tomorrow").innerText = months[mm] + " " + dd;
dd++;
var atom = document.querySelector(".after-tomorrow").innerText = months[mm] + " " + dd;

var info = document.getElementById("Info");

var btn1 = document.getElementsByClassName("btn")[0];
var btn2 = document.getElementsByClassName("btn")[1];
var btn3 = document.getElementsByClassName("btn")[2];
var btncur = document.getElementsByClassName("btn2")[0];
var span = document.getElementsByClassName("close")[0];

btn1.onclick = function() {
    weather.moreInfo(0);
    info.style.display = "block";
    document.querySelector(".date").innerText = tod + ", " + yr;
}
btn2.onclick = function() {
    weather.moreInfo(1);
    info.style.display = "block";
    document.querySelector(".date").innerText = tom + ", " + yr;
}
btn3.onclick = function() {
    weather.moreInfo(2);
    info.style.display = "block";
    document.querySelector(".date").innerText = atom + ", " + yr;
}
btncur.onclick = function() {
    weather.currentWeather
    var div = document.getElementById("cur");
    div.classList.toggle('hidden'); 
    var mm = document.getElementById("min-max");
    mm.classList.toggle('hidden'); 
}
span.onclick = function() {
  info.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == info) {
    info.style.display = "none";
  }
}