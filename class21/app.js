// function hello(user, pass){
// console.log(`Hello ${user}, your password is ${pass}`);
// }
// hello("Umra","ksdhkajh26314764783")
// hello("fizra.1234@","Fizra")


// console.log(user);


// function sum(num1,num2){
//     var cal = num1+num2
//     // console.log(cal)
//     // return cal
//     alert("umra")
// }
// console.log(cal);
// console.log(sum(2,2));
// alert(sum(5,2))
// document.write(sum(3,4))



// function test(){
//     var user ="Umra"
//     console.log(user);
// }
// test()
// console.log(user);



// function greet(user, org){
//     // var user = prompt("Enter your name:")
//     var string =`Welcome ${user} to ${org}`;
//     return string
// }

// console.log(greet("Umra","SMIT"));
// document.write(greet("Aniqa","Aptech"))
// greet("Sundus","Adamjee")
// greet("Eraj","Dubai")



// function hyp(base, perp){
//     function suqare(a){
//        return a*a;
//     }
// //    var hypo=suqare(base)+suqare(perp)
//    var hypoSquare=(base*base)+(perp*perp)
//    return Math.sqrt(hypoSquare).toFixed(2)
// }
// console.log(hyp(3,6));

// suqare(7)



// var str = prompt("Enter a word").toLowerCase() //Umra
// var reverse = ""
// for(var i= str.length-1; i>=0; i--){
//     // console.log(str[i]);
//     reverse =reverse+str[i] //"ar"+m
// }
// console.log(str, reverse);
// if(reverse===str){
//     console.log(str+" is a palindrome word");
// }else{
//     console.log(str+" is not a palindrome word");

// }

function palindrome(str){


var reverse = ""
for(var i= str.length-1; i>=0; i--){
    // console.log(str[i]);
    reverse =reverse+str[i] //"ar"+m
}
console.log(str, reverse);
if(reverse===str){
    console.log(str+" is a palindrome word");
}else{
    console.log(str+" is not a palindrome word");

}
}
var string = prompt("Enter a word").toLowerCase() //Umra
palindrome(string)
