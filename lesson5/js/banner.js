let date = new Date();
let day = date.getDay();
console.log("what is the day of the week: " + day);

if (day == 5) {
    console.log("this is the right day");
    document.getElementById("pancakes").style.display = "block";
} else {
    console.log("this is not the right day");
    document.getElementById("pancakes").style.display = "none";
}