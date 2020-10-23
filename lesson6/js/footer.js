let dateElement = document.getElementById('date-right-now');
let date = new Date();
let formatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

dateElement.textContent = date.toLocaleDateString('en-US', formatOptions);