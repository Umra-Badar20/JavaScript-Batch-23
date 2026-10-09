// console.log("u".toUpperCase());
// console.log("i".toLocaleUpperCase("tr-TR"));

// function greetUser(){
//     console.log("Welcome to smit");
// }
// console.log("Hello world");

// greetUser()
// greetUser()
// console.log("Hello world");
// greetUser()
// greetUser()

// function getCurrentTime(){
//     var now = new Date()
//     var hours = now.getHours()
//     var mins = now.getMinutes()
//     var sec = now.getSeconds()

//     console.log(`Time: ${hours}:${mins}:${sec}`);
// }

// getCurrentTime()
// var userName = "Umra"
// function greetUser(userName){ //parameter
//     console.log("Welcome to smit", userName);
// }
// var userArgument =prompt("Enter your name:")
// greetUser(userArgument)// Argument
// greetUser("Fizra")


// function sum(a,b,c){
//     console.log(a,"+",b,"+",c,"=",a+b+c);
// }
// function sub(a,b){
//     console.log(a,"-",b,"=",a-b);
// }
// var num1= Number(prompt("Enter num 1"))
// var num2= Number(prompt("Enter num 2"))
// var num3= Number(prompt("Enter num 3"))
// sum(num1,num2,num3)
// sub(num1,num2)


// function percentageCalculator(sub1,sub2,sub3){
//     var per = ((sub1+sub2+sub3)/300) *100
//     console.log(Math.floor(per)+"%");
//     console.log(per.toFixed(2)+"%");
// }
// var num1= Number(prompt("Enter num 1"))
// var num2= Number(prompt("Enter num 2"))
// var num3= Number(prompt("Enter num 3")) 
// percentageCalculator(num1,num2,num3)


function titleCase(string){
    var splittedStr = string.split(" ")
    for(var i=0; i<splittedStr.length; i++){
        var firstLetter = splittedStr[i].charAt(0).toUpperCase()
        var remaining = splittedStr[i].slice(1)
        var str = firstLetter+remaining
        // console.log(str, splittedStr[i]);
        splittedStr[i] = str

        // console.log(splittedStr);
    }
    var titleCaseStr = splittedStr.join(" ")
    console.log(titleCaseStr);
}
var string = prompt("Enter a string")
titleCase(string)

var arr = [1,2,3]
arr[1]= 5
console.log(arr);