// function power(a,b){
//   return a**b;
// }

// console.log(power(2,3));
// document.write(power(7,2))

// console.log(2**3); //2x2x2
// console.log(5**2); // 5x5
// console.log(8**2); // 5x5
// var a = +prompt("Enter a number")
// var b = +prompt("Enter a number")
// console.log(Math.pow(a,b));


// function leapYear(year){
//     if(year%400 ===0 ||(year%4 ===0 && year%100 !=0)){
//         return year+" is a leap year"
//     }else{
//         return year+" is not a leap year"
//     }
// }
// console.log(leapYear(2000));
// console.log(leapYear(2012));
// console.log(leapYear(2006));


// var text = "My name is Umra. my Father name is Badar"

// console.log(text.indexOf("Name")); //-1
// console.log(text.lastIndexOf("name"));

// var name = "umra badar badar"
// console.log(name.charAt(name.length-1));
// console.log(name.charAt(0));
// var newName = name.replace(/badar/g,"hiba")
// console.log(newName);



// var num = prompt("Enter a number")
// console.log(parseInt(num));
// console.log(parseFloat(num));
// console.log(Number(num));
// // console.log(num);

// var random = Math.random()
// console.log(random);
// console.log(Number(random.toFixed(3)));

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var date = new Date()
// console.log(date.toString().slice(0,3));

console.log(date.getDay());
console.log(date.getHours());
console.log(dayNames[date.getDay()]);