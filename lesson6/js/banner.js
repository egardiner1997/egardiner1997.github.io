var todaysdate = new Date();
var dd = todaysdate.getDate();
var mm = todaysdate.getMonth()+1;

var yyyy = todaysdate.getFullYear();
if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 
var todaysdate = dd+'/'+mm+'/'+yyyy;

//Fridays
var weekadates = 
["16/10/2020",//October
"23/10/2020",
"30/10/2020", "06/11/2020",//November
"13/11/2020", "20/11/2020",
"27/11/2020",
];

//Saturdays
var weekbdates = 
["17/10/2020",//October
"24/10/2020",
"31/10/2020", "07/11/2020",//November
"14/11/2020", "21/11/2020",
"28/11/2020",
];





var a = weekadates.indexOf(todaysdate);
var b = weekbdates.indexOf(todaysdate);


if (a > -1) 
{
    document.getElementById("changeText").innerHTML = "<b>Saturday = Preston Pancakes in the Park! <br> 9:00 a.m. Saturday at the city park pavilion!</b>";
} 
else if (b > -1) 
{
    document.getElementById("changeText").innerHTML = "<b>Saturday = Preston Pancakes in the Park! <br> 9:00 a.m. Saturday at the city park pavilion!</b>"; 
} else
{
    document.getElementById("changeText").style.visibility = "hidden";
}