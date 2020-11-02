let today = new Date();
let day = today.getDay();

if (day == 5) {
    console.log("this is the right day");
    document.getElementById("pancakes").style.display = "block";
} else {
    console.log("this is not the right day");
    document.getElementById("pancakes").style.display = "none";
}