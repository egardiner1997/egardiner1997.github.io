const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=={864026d837b6f9641c1d5d20c101245b}";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });