const apiURL = "js/info.json";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("name").textContent = jsObject.info[0].scooters[0].name;
    document.getElementById('persons').textContent = jsObject.info[0].scooters[0].maxpersons;
    document.getElementById('halfdayA').textContent = jsObject.info[0].scooters[0].reserved[0].half;
    document.getElementById('fulldayA').textContent = jsObject.info[0].scooters[0].reserved[1].full;
    document.getElementById('halfdayB').textContent = jsObject.info[0].scooters[0].walkin[0].half;
    document.getElementById('fulldayB').textContent = jsObject.info[0].scooters[0].walkin[1].full;

    document.getElementById("name2").textContent = jsObject.info[0].scooters[1].name;
    document.getElementById('persons2').textContent = jsObject.info[0].scooters[1].maxpersons;
    document.getElementById('halfdayA2').textContent = jsObject.info[0].scooters[1].reserved[0].half;
    document.getElementById('fulldayA2').textContent = jsObject.info[0].scooters[1].reserved[1].full;
    document.getElementById('halfdayB2').textContent = jsObject.info[0].scooters[1].walkin[0].half;
    document.getElementById('fulldayB2').textContent = jsObject.info[0].scooters[1].walkin[1].full;

    document.getElementById("name3").textContent = jsObject.info[0].scooters[2].name;
    document.getElementById('persons3').textContent = jsObject.info[0].scooters[2].maxpersons;
    document.getElementById('halfdayA3').textContent = jsObject.info[0].scooters[2].reserved[0].half;
    document.getElementById('fulldayA3').textContent = jsObject.info[0].scooters[2].reserved[1].full;
    document.getElementById('halfdayB3').textContent = jsObject.info[0].scooters[2].walkin[0].half;
    document.getElementById('fulldayB3').textContent = jsObject.info[0].scooters[2].walkin[1].full;

    document.getElementById("name4").textContent = jsObject.info[1].atvs[0].name;
    document.getElementById('persons4').textContent = jsObject.info[1].atvs[0].maxpersons;
    document.getElementById('halfdayA4').textContent = jsObject.info[1].atvs[0].reserved[0].half;
    document.getElementById('fulldayA4').textContent = jsObject.info[1].atvs[0].reserved[1].full;
    document.getElementById('halfdayB4').textContent = jsObject.info[1].atvs[0].walkin[0].half;
    document.getElementById('fulldayB4').textContent = jsObject.info[1].atvs[0].walkin[1].full;

    document.getElementById("name5").textContent = jsObject.info[2].jeeps[0].name;
    document.getElementById('persons5').textContent = jsObject.info[2].jeeps[0].maxpersons;
    document.getElementById('halfdayA5').textContent = jsObject.info[2].jeeps[0].reserved[0].half;
    document.getElementById('fulldayA5').textContent = jsObject.info[2].jeeps[0].reserved[1].full;
    document.getElementById('halfdayB5').textContent = jsObject.info[2].jeeps[0].walkin[0].half;
    document.getElementById('fulldayB5').textContent = jsObject.info[2].jeeps[0].walkin[1].full;

    document.getElementById("name6").textContent = jsObject.info[2].jeeps[1].name;
    document.getElementById('persons6').textContent = jsObject.info[2].jeeps[1].maxpersons;
    document.getElementById('halfdayA6').textContent = jsObject.info[2].jeeps[1].reserved[0].half;
    document.getElementById('fulldayA6').textContent = jsObject.info[2].jeeps[1].reserved[1].full;
    document.getElementById('halfdayB6').textContent = jsObject.info[2].jeeps[1].walkin[0].half;
    document.getElementById('fulldayB6').textContent = jsObject.info[2].jeeps[1].walkin[1].full;

});
