let weather = {
    "apiKey": "1c59bf0639f595642bcd71b39bd7fdd9",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q=" 
            + city 
            + "&cnt=3&units=imperial&appid=" 
            + this.apiKey
        ).then((response) => response.json())
         .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        if(data.cod < 400){
            document.querySelector(".container").classList.remove("load");
            document.querySelector(".cityName").classList.remove("load");
            document.body.style.backgroundImage = "url('https://source.unsplash.com/weekly?" + data.city.name + "')";
        
        var { icon, description } = data.list[0].weather[0];
        var { temp_min, temp_max, humidity} = data.list[0].main;
        var { speed } = data.list[0].wind;
        temp_max = Math.round(temp_max);
        temp_min = Math.round(temp_min);
        document.querySelector(".city").innerText = "Weather in " + data.city.name;
        document.querySelector(".icon1").src = 
        "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description1").innerText = description;
        document.querySelector(".min1").innerText = "Min: " + temp_min + "°F";
        document.querySelector(".max1").innerText = "Max: " + temp_max + "°F";
        document.querySelector(".humidity1").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".speed1").innerText = "Wind Speed: "+ speed + "mph";

        var { icon, description } = data.list[1].weather[0];
        var { temp_min, temp_max, humidity } = data.list[1].main;
        var { speed } = data.list[1].wind;
        temp_max = Math.round(temp_max);
        temp_min = Math.round(temp_min);
        document.querySelector(".icon2").src = 
        "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description2").innerText = description;
        document.querySelector(".min2").innerText = "Min: " + temp_min + "°F";
        document.querySelector(".max2").innerText = "Max: " + temp_max + "°F";
        document.querySelector(".humidity2").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".speed2").innerText = "Wind Speed: "+ speed + "mph";

        var { icon, description } = data.list[2].weather[0];
        var { temp_min, temp_max, humidity } = data.list[2].main;
        var { speed } = data.list[2].wind;
        temp_max = Math.round(temp_max);
        temp_min = Math.round(temp_min);
        document.querySelector(".icon3").src = 
        "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description3").innerText = description;
        document.querySelector(".min3").innerText = "Min: " + temp_min + "°F";
        document.querySelector(".max3").innerText = "Max: " + temp_max + "°F";
        document.querySelector(".humidity3").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".speed3").innerText = "Wind Speed: "+ speed + "mph";
        }
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
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
var mm = String(today.getMonth()); //January is 0
const months = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];
dd++;
document.querySelector(".tomorrow").innerText = months[mm] + ", " + dd;
dd++;
document.querySelector(".after-tomorrow").innerText = months[mm] + ", " + dd;
