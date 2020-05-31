//jshint esversion:6

const api = {
    key:"c38c085bfefa643a095b4bd20956d20b",
    base:"https://api.openweathermap.org/data/2.5/"
};

//datebuilder starts
 function dateBuilder(d){
     let months =["January","February","March","April","May","June","July","August","September",
    "October","November","December"];
    let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day  = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    
    return `${day} ${date} ${month} ${year}`;
 }

//datebuilder ends
/* Default Location */
const url="https://ipinfo.io/json";
$.ajax(url,{
    type:"GET",
    success: function(data){
        console.log(data);
        $("#loc").find(".city").text(data.city);
        $("#loc").find(".country").text(data.country);
        getWeatherData(data.city);
    },
    error:function(error){
        console.log(error);
    }
});
const apiKey="c38c085bfefa643a095b4bd20956d20b";
const getWeatherData=(city)=> {
const weatherURL="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"&units=metric";
$.ajax(weatherURL,{
    type:"GET",
    success:function(data){
        console.log(data);
        $("#crrnt").find(".temp").html(`${Math.round(data.main.temp)}<span>℃</span>`);
        $("#crrnt").find(".weather").text(data.weather[0].main);
        $("#crrnt").find(".hi-low").html(`${data.main.temp_min}℃ / ${data.main.temp_max}℃`);
        let now = new Date();
        $("#loc").find(".date").text(dateBuilder(now));
    },
    error:function(error){
        console.log(error);
    }
    
});
}; 
/* Default ends*/

/* search stats */

const searchbox =document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);
function setQuery(evt){
    if(evt.keyCode ==13) {
        getResults(searchbox.value);
        document.getElementById("com").style.visibility = "hidden";
        document.getElementById("desh").style.visibility = "hidden";
        
   

    }
}
function getResults( query){
    console.log(query);
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);
   
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    document.getElementById("cit").style.cssText = "margin-left: 58px;";

    let now = new Date();
    let date =document.querySelector('.location .date');
    date.innerText =dateBuilder(now);
    let temp = document.querySelector('.current .temp');
    temp.innerHTML= `${Math.round(weather.main.temp)}<span>℃</span>`;

    let weather_el= document.querySelector('.current .weather');
    weather_el.innerHTML =weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText =`${weather.main.temp_min}℃ / ${weather.main.temp_max}℃`;
    
    
    
}




