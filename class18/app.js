// var today = new Date()
// var eid = new Date("03/21/2026") //MM-DD-YYYY
// console.log(today);
// console.log(eid);
// var msToday = today.getTime()
// var msEid = eid.getTime()
// var diff = msToday - msEid
// var months = Math.floor(diff/(1000 * 60 * 60 * 24 *30))
// console.log(months);

// var today = new Date()
// var userDob = prompt("Enter your dob ie, MM-DD-YYYY")
// var dob = new Date(userDob)
// var msToday = today.getTime()
// var msDob = dob.getTime()
// var diff = msToday - msDob
// var years = Math.floor(diff/ (1000*60*60*24*30*12))
// console.log(years);


// var today = new Date()
// var hours = today.getHours()
// var ampm
// if(hours >= 12){
//     ampm ="PM"
// }else{
//     ampm = "AM"
// }

// if(hours>12){
//     hours = hours-12
// }else if(hours ===0){
//     hours = 12
// }
// console.log(hours+ ampm);


var postTime = new Date("1/4/2026 1:38:00")
var now = new Date()
var diff = Math.floor((now - postTime)/1000)

console.log(diff);
if(diff < 60){
    console.log("Just Now");
}else if(diff >=60 && diff <3600){
    var mins = Math.floor(diff/60)
    console.log(mins+" Mins ago");
}else if(diff >=3600 && diff<86400){
    var hours = Math.floor(diff/3600)
    console.log(hours+" hours ago");
}else{
    var days = Math.floor(diff/86400)
    console.log(days+" days ago");

}


// var today = new Date()

// console.log(today.setFullYear(2006));