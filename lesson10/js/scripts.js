//banner script
let today = new Date();
let day = today.getDay();

if (day == 5) {
    console.log("this is the right day");
    document.getElementById("pancakes").style.display = "block";
} else {
    console.log("this is not the right day");
    document.getElementById("pancakes").style.display = "none";
}

//navigation script
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

//footer date script
const format = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  document.getElementById('date-right-now').textContent = new Date().toLocaleDateString('en-us', format);