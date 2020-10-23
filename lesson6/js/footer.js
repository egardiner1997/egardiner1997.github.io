let dateElement = document.getElementById('date-right-now');
let date = new Date();
let formatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

dateElement.textContent = date.toLocaleDateString('en-US', formatOptions);