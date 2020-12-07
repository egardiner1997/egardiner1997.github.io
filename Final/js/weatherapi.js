//Openweathermap scripts for dynamic forecast
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&appid=864026d837b6f9641c1d5d20c101245b";
//This is for the changing weather summary
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("current").textContent = "Current Weather: " + jsObject.list[8].weather[0].main;
    document.getElementById('temper').textContent = Math.round(jsObject.list[8].main.temp);
    document.getElementById('humidity').textContent = "Humidity: " + jsObject.list[8].main.humidity + "%";

    document.getElementById("current2").textContent = "Current Weather: " + jsObject.list[16].weather[0].main;
    document.getElementById('temper2').textContent = Math.round(jsObject.list[16].main.temp);
    document.getElementById('humidity2').textContent = "Humidity: " + jsObject.list[16].main.humidity + "%";

    document.getElementById("current3").textContent = "Current Weather: " + jsObject.list[24].weather[0].main;
    document.getElementById('temper3').textContent = Math.round(jsObject.list[24].main.temp);
    document.getElementById('humidity3').textContent = "Humidity:  " + jsObject.list[24].main.humidity + "%";

    console.log("Dynamic Weather Summary");
}); 

//Getting the day of the week for the forecast
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("day").innerHTML = days[d.getDay() + 1];
document.getElementById("day2").innerHTML = days[d.getDay() + 2];
document.getElementById("day3").innerHTML = days[d.getDay() + 3];

  //This is for the 5 Day Forecast Temperatures
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);    
    //Using main.temp_max for the highest temperature of the day
    document.getElementById('temper').textContent = Math.round(jsObject.list[8].main.temp_max);
    document.getElementById('temper2').textContent = Math.round(jsObject.list[16].main.temp_max);
    document.getElementById('temper3').textContent = Math.round(jsObject.list[24].main.temp_max);


    console.log("5 Day Forecast Temperatures");
  });


  //This is for the 5 Day Forecast Images
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);    
    //Using weather.icon for the icon images
    //Day 1
    const image = 'https://openweathermap.org/img/w/' + jsObject.list[8].weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.list[8].weather[0].description;  // note how we reference the weather array
    //document.getElementById('image').textContent = image; // informational specification only, shows the link of the icon
    document.getElementById('icon').setAttribute('src', image);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);


    //Day 2
    const image2 = 'https://openweathermap.org/img/w/' + jsObject.list[16].weather[0].icon + '.png';  // note the concatenation
    const desc2 = jsObject.list[16].weather[0].description;  // note how we reference the weather array
    //document.getElementById('image2').textContent = image2; // informational specification only, shows the link of the icon
    document.getElementById('icon2').setAttribute('src', image2);  // focus on the setAttribute() method
    document.getElementById('icon2').setAttribute('alt', desc2);


    //Day 3
    const image3 = 'https://openweathermap.org/img/w/' + jsObject.list[24].weather[0].icon + '.png';  // note the concatenation
    const desc3 = jsObject.list[24].weather[0].description;  // note how we reference the weather array
    //document.getElementById('image3').textContent = image3; // informational specification only, shows the link of the icon
    document.getElementById('icon3').setAttribute('src', image3);  // focus on the setAttribute() method
    document.getElementById('icon3').setAttribute('alt', desc3);

    console.log("5 Day Forecast Images");
});
