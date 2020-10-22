
function chillInfo(){
var temp= parseFloat(document.getElementById('temp').innerHTML);
var wSpeed= parseFloat(document.getElementById('wSpeed').innerHTML);
var calcChill = chillWind(temp, wSpeed);
document.getElementById('windChill').innerHTML = calcChill;
}

function chillWind(a, b) {
    if (a < 50 && b > 3){
    var windChill = (35.74 + (0.6215 * a))-(35.75 * Math.pow(b,0.16)) + (0.4275*a*Math.pow(b,0.16));
    var windChill= Math.round(windChill);
    return windChill;
}
    else{
    windChill = "N/A"
    return windChill;
    }
    
}