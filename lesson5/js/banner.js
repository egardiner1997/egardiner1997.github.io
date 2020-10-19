let date = new Date();
let dayOfWeek = date.getDay();
console.log("what is the day of the week: " + dayOfWeek);

if (dayOfWeek == 5) {
    document.getElementById("pancakes").style.display = "block";
} else {
    document.getElementById("pancakes").style.display = "none";
}