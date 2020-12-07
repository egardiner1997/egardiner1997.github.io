//navigation script
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

//footer date script
//const format = {
  //  weekday: 'long',
   // day: 'numeric',
    //month: 'long',
    //year: 'numeric'
  //};
  //document.getElementById('date-right-now').textContent = new Date().toLocaleDateString('en-us', format);

let d = new Date();
let year = d.getFullYear();
document.getElementById("year").textContent = year;

let modified = document.lastModified;
document.getElementById("modified").textContent = modified;