// 8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].
//  LARGEST
// var A = [1000,24, 53, 78, 91, 12, 190]
// var largest=0
//  for (i=0; i< A.length ; i++){
//     if (A[i] > largest){
//         largest = A[i]
//     }
//  }
//  console.log(`${largest} is the largest`)

//  Smallest

// var arr = [24, 53, 78, 91, 12, 190]
// var smallest = arr[3] //91
// for (var i=0; i< arr.length ; i++){
//     if(arr[i]<smallest){
//         smallest=arr[i] //24
//     }

// }
// console.log(`smallest number is ${smallest}`)


// for(var i= 101; i>=50; i--){
//     i--
//     console.log(i);
// }

// for(var i=5 ;i<=100; i+=5){
//     console.log(i);
// }
var rows = +prompt("Enter the number of rows")
var stars =+prompt("Enter the number of stars in each row")
var char = prompt("Enter the character")
for (var i = 1; i <= rows; i++) { //4
    for(var j=1; j<=stars;j++){
        document.write(char)
    }
    
    document.write("<br>")
}
//*****
//***** 
//***** 
//***** 

// for (var i = 1; i <= 5; i++) { //3
//     for(var j=1; j<=i;j++){ //3
//         document.write("*")
//     }
    
//     document.write("<br>")
// }
//*
//** 
//***


// for (var i = 5; i >= 0; i--) { //3
//     for(var j=1; j<=i;j++){ //1
//         document.write("*")
//     }
    
//     document.write("<br>")
// }
//***** 
//****
//***


