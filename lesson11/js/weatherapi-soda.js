//Openweathermap scripts for dynamic forecast
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=864026d837b6f9641c1d5d20c101245b";
//This is for the changing weather summary
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("weather").textContent = jsObject.list[0].weather[0].main;
    document.getElementById('high').textContent = Math.round(jsObject.list[0].main.temp_max);
    document.getElementById('temp').textContent = Math.round(jsObject.list[0].main.temp);
    document.getElementById('humid').textContent = jsObject.list[0].main.humidity;
    document.getElementById('wSpeed').textContent = Math.round(jsObject.list[0].wind.speed);

    console.log("Dynamic Weather Summary");
}); 

//Getting the day of the week for the forecast
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("day").innerHTML = days[d.getDay() + 1];
document.getElementById("day2").innerHTML = days[d.getDay() + 2];
document.getElementById("day3").innerHTML = days[d.getDay() + 3];
document.getElementById("day4").innerHTML = days[d.getDay() + 4];
document.getElementById("day5").innerHTML = days[d.getDay() + 5];

  //This is for the 5 Day Forecast Temperatures
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);    
    //Using main.temp_max for the highest temperature of the day
    document.getElementById('temper').textContent = Math.round(jsObject.list[0].main.temp_max);
    document.getElementById('temper2').textContent = Math.round(jsObject.list[1].main.temp_max);
    document.getElementById('temper3').textContent = Math.round(jsObject.list[9].main.temp_max);
    document.getElementById('temper4').textContent = Math.round(jsObject.list[17].main.temp_max);
    document.getElementById('temper5').textContent = Math.round(jsObject.list[25].main.temp_max);


    console.log("5 Day Forecast Temperatures");
  });


  //This is for the 5 Day Forecast Images
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);    
    //Using weather.icon for the icon images
    //Day 1
    const image = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.list[0].weather[0].description;  // note how we reference the weather array
    document.getElementById('image').textContent = image; // informational specification only, shows the link of the icon
    document.getElementById('icon').setAttribute('src', image);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);


    //Day 2
    const image2 = 'https://openweathermap.org/img/w/' + jsObject.list[1].weather[0].icon + '.png';  // note the concatenation
    const desc2 = jsObject.list[1].weather[0].description;  // note how we reference the weather array
    document.getElementById('image2').textContent = image2; // informational specification only, shows the link of the icon
    document.getElementById('icon2').setAttribute('src', image2);  // focus on the setAttribute() method
    document.getElementById('icon2').setAttribute('alt', desc2);


    //Day 3
    const image3 = 'https://openweathermap.org/img/w/' + jsObject.list[9].weather[0].icon + '.png';  // note the concatenation
    const desc3 = jsObject.list[9].weather[0].description;  // note how we reference the weather array
    document.getElementById('image3').textContent = image3; // informational specification only, shows the link of the icon
    document.getElementById('icon3').setAttribute('src', image3);  // focus on the setAttribute() method
    document.getElementById('icon3').setAttribute('alt', desc3);


    //Day 4
    const image4 = 'https://openweathermap.org/img/w/' + jsObject.list[17].weather[0].icon + '.png';  // note the concatenation
    const desc4 = jsObject.list[17].weather[0].description;  // note how we reference the weather array
    document.getElementById('image4').textContent = image4; // informational specification only, shows the link of the icon
    document.getElementById('icon4').setAttribute('src', image4);  // focus on the setAttribute() method
    document.getElementById('icon4').setAttribute('alt', desc4);


    //Day 5
    const image5 = 'https://openweathermap.org/img/w/' + jsObject.list[25].weather[0].icon + '.png';  // note the concatenation
    const desc5 = jsObject.list[25].weather[0].description;  // note how we reference the weather array
    document.getElementById('image5').textContent = image5; // informational specification only, shows the link of the icon
    document.getElementById('icon5').setAttribute('src', image5);  // focus on the setAttribute() method
    document.getElementById('icon5').setAttribute('alt', desc5);

    console.log("5 Day Forecast Images");
});


//wind chill script
  function chillInfo(){
    var temp= parseFloat(document.getElementById('temp').innerHTML);
    var wSpeed= parseFloat(document.getElementById('wSpeed').innerHTML);
    var calcChill = chillWind(temp, wSpeed);
    document.getElementById('windChill').innerHTML = calcChill;
    }
    
    function chillWind(a, b) {
        
        if (a < 50 && b > 3){
        console.log("This should show the temp and the speed calculated as the wind chill.");    
        var windChill = (35.74 + (0.6215 * a))-(35.75 * Math.pow(b,0.16)) + (0.4275*a*Math.pow(b,0.16));
        var windChill= Math.round(windChill);
        return windChill;
    }
        else{
        console.log("This is what happens if it is not within 50 and 3.");
        windChill = "N/A"
        return windChill;
        }
        
    }