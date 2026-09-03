// post increment
// var num= 10;

// console.log(num++);
// console.log(num);

// pre increment
// var newNum=20;
// console.log(++newNum);
// console.log(num);

// console.log(newNum++ + --newNum - newNum-- + newNum) 21 + 21 - 21 + 20 =41

// console.log(newNum++ - --num + num++ - ++newNum - --newNum) 20 - 9 + 9 - 22 - 21

// var num = 10

// if(num == 10){
//     console.log("hell0");
    
// }
// console.log("if block ended");


// var capital = prompt("What is the capital of pakistan?")
// console.log("User answer",capital);
// if(capital == "islamabad"){
//     console.log("Correct answer");
    
// }

var num = Number(prompt("Enter a number"))
console.log (typeof num, num);
var score = 0
if(num===20){
    score++
    console.log("Correct guess!, your score is:", score);   
}
var ques2 = prompt("which city is called city of lights?")
if(ques2 == "karachi"){
    score++
    console.log("Correct guess!, your score is:", score);   
}
var ques3 = prompt("Name the coldest planet.")
if(ques3 == "neptune"){
    score++
    console.log("Correct guess!, your score is:", score);

}
console.log("Total score: "+score+ " out of 3");

