const format = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};
document.getElementById('date-right-now').textContent = new Date().toLocaleDateString('en-us', format);