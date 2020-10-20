function chillInfo(){
    let temp = parseFloat(document.getElementById('temp').innerHTML);
    let speed = parseFloat(document.getElementById('speed').innerHTML);
    let calcChill = windChill(temp, speed);
    windChill(temp, speed);
    document.getElementById('chill').innerHTML = calcChill;
    
}

function windChill(t, s) {
    if (t < 50 && s > 3) {
    let chill = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
    chill = chill.toFixed(0);
    return chill;
    }
    else {
    chill = "N/A"
    return chill;
    }
}