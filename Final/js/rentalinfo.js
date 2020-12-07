const requestURL = 'js/info.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const rentalinfo = jsonObject['info'];
    for (let i = 0; i < rentalinfo.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let line = document.createElement('h4');
        let photo = document.createElement('img');

        h2.textContent = jsonObject.info[i].type;
        card.appendChild(h2);

        line.textContent = jsonObject.info[i].motto;
        card.appendChild(line);

        photo.setAttribute('src', jsonObject.info[i].photo);
        card.appendChild(photo);


        document.querySelector('div.cards').appendChild(card);
    }
  });