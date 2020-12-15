const requestURL = 'js/info.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const rentals = jsonObject['rentals'];
    for (let i = 0; i < rentals.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let line = document.createElement('h4');
        let photo = document.createElement('img');
        let para = document.createElement('p');
        let para1 = document.createElement('p');
        let para2 = document.createElement('p');

        h2.textContent = jsonObject.rentals[i].type;
        card.appendChild(h2);

        line.textContent = jsonObject.rentals[i].motto;
        card.appendChild(line);

        para.textContent = jsonObject.rentals[i].events[0];
        card.appendChild(para);
        para1.textContent = jsonObject.rentals[i].events[1];
        card.appendChild(para1);
        para2.textContent = jsonObject.rentals[i].events[2];
        card.appendChild(para2);

        photo.setAttribute('src', jsonObject.rentals[i].photo);
        photo.setAttribute('alt', jsonObject.rentals[i].type);
        card.appendChild(photo);

        document.querySelector('div.cards').appendChild(card);
    }
  });