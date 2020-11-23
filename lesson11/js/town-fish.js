const requestURL = '/lesson11/js/towns.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let line = document.createElement('h4');
        let event1 = document.createElement('p');
        let event2 = document.createElement('p');
        let event3 = document.createElement('p');
        let event4 = document.createElement('p');
        let photo = document.createElement('img');

        h2.textContent = jsonObject.towns[0].name;
        card.appendChild(h2);

        line.textContent = jsonObject.towns[0].motto;
        card.appendChild(line);

        event1.textContent = jsonObject.towns[0].events[0];
        card.appendChild(event1);
        event2.textContent = jsonObject.towns[0].events[1];
        card.appendChild(event2);
        event3.textContent = jsonObject.towns[0].events[2];
        card.appendChild(event3);
        event4.textContent = jsonObject.towns[0].events[3];
        card.appendChild(event4);

        photo.setAttribute('src', jsonObject.towns[0].photo);
        card.appendChild(photo);


        document.querySelector('div.cards').appendChild(card);
  });