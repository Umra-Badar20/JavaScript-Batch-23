// var today = new Date()
// console.log(typeof today, today);

// todaySting = today.toString()
// console.log(typeof todaySting, todaySting);

// var day = todaySting.slice(0,3)
// var time = todaySting.slice(16,24)
// var date = todaySting.slice(4,16)

// console.log(day);
// console.log(time);
// console.log(date );

// var today = new Date()
// var dayNames = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
// var day = today.getDay() //5
// console.log(dayNames[day]);


// var today = new Date()
// var month = today.getMonth()
// var monthNames = ["jan","feb","mar","apr","may","jun","july","aug","sep","oct","nov","dec"]
// var getMonth = monthNames[month]
// console.log(getMonth);

// var today = new Date()
// console.log(today.getDate());
// console.log(today.getFullYear());
// console.log("Hours",today.getHours());
// console.log("Minutes",today.getMinutes());
// console.log("Seconds",today.getSeconds());
// console.log("Milli Seconds",today.getMilliseconds());
// console.log(today.getTime());


// var today = new Date()
// var ramadan = new Date("February 7, 2027")
// var dayNames = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
// var day=  dayNames[ramadan.getDay()]
// console.log(day);

var today = new Date()
var ramadan = new Date("February 7, 2027")
var todayMili = today.getTime()
var ramadanMili = ramadan.getTime()


var diff = ramadanMili - todayMili
var sec = diff/1000
var min = sec/60
var hours = min/60
var days = hours/24
var months = days/ 30
console.log(Math.floor(months));