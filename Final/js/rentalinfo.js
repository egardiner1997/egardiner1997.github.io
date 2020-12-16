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

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let image = document.createElement('span');
    let image2 = document.createElement('span');
    let image3 = document.createElement('span');
    let image4 = document.createElement('span');
    let image5 = document.createElement('span');
    let image6 = document.createElement('span');
    let pic = document.createElement('img');
    let pic2 = document.createElement('img');
    let pic3 = document.createElement('img');
    let pic4 = document.createElement('img');
    let pic5 = document.createElement('img');
    let pic6 = document.createElement('img');

    pic.setAttribute('src', jsObject.info[0].scooters[0].photo);
    pic.setAttribute('alt', jsObject.info[0].scooters[0].name);
    image.appendChild(pic);
    
    pic2.setAttribute('src', jsObject.info[0].scooters[1].photo);
    pic2.setAttribute('alt', jsObject.info[0].scooters[1].name);
    image2.appendChild(pic2);

    pic3.setAttribute('src', jsObject.info[0].scooters[2].photo);
    pic3.setAttribute('alt', jsObject.info[0].scooters[2].name);
    image3.appendChild(pic3);

    pic4.setAttribute('src', jsObject.info[1].atvs[0].photo);
    pic4.setAttribute('alt', jsObject.info[1].atvs[0].name);
    image4.appendChild(pic4);

    pic5.setAttribute('src', jsObject.info[2].jeeps[0].photo);
    pic5.setAttribute('alt', jsObject.info[2].jeeps[0].name);
    image5.appendChild(pic5);

    pic6.setAttribute('src', jsObject.info[2].jeeps[1].photo);
    pic6.setAttribute('alt', jsObject.info[2].jeeps[1].name);
    image6.appendChild(pic6);

    document.querySelector('span.image').appendChild(image);
    document.querySelector('span.image2').appendChild(image2);
    document.querySelector('span.image3').appendChild(image3);
    document.querySelector('span.image4').appendChild(image4);
    document.querySelector('span.image5').appendChild(image5);
    document.querySelector('span.image6').appendChild(image6);
});
