var d = new Date();
document.getElementById("year").innerHTML = d.toDateString();

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}