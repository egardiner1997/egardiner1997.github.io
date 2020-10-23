const dateElement = document.getElementById('date-right-now');
const date = new Date();
const formatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

dateElement.textContent = date.toLocaleDateString('en-US', formatOptions);