// var arr = ["This", "is", "a","cat"]
// var newStr = arr.join(" ")
// var i = 1
// console.log(i++,newStr);
// console.log(i++,newStr);
// console.log(i++,newStr);
// console.log(i++,newStr);
// console.log(i++,newStr);
// console.log(i++,newStr);
// console.log(i++,newStr);
// console.log(i++,newStr);
// console.log(i++,newStr);

//______________Multi dimensional Array
// var arr = [[[1,3,8],[7,2],3],[4,5,6]]
// console.log(arr[0][1][0]);
// console.log(arr[1][1],arr[1][2] );
// for(var i = 0 ; i <10; i++){
//     console.log(i+1,"Hello");
// }
// console.log("Loop ended");



// for(var i=1; i<=10; i++){
//     // console.log(i);
//     // document.write(i +"<br>")
//     document.write(`<h3> ${i} </h3>`)
// }

// console.log(`5 x ${1} = ${5*1}`);
// console.log(`5 x ${2} = ${5*2}`);
// console.log(`5 x ${3} = ${5*3}`);
// console.log(`5 x ${4} = ${5*4}`);
// console.log(`5 x ${5} = ${5*5}`);
// console.log(`5 x ${6} = ${5*6}`);
// console.log(`5 x ${7} = ${5*7}`);
// console.log(`5 x ${8} = ${5*8}`);
// console.log(`5 x ${9} = ${5*9}`);
// console.log(`5 x ${10} = ${5*10}`);

var num = +prompt("Enter your table number:") || 5
var multiple = +prompt("Enter a number of multiples")  ||10

for(var i = 1; i<= multiple; i++){
      console.log(`${num} x ${i} = ${num*i}`);  

}

// for(var i =1; i<= multiple; i++){ 
//     if(num== false) {
//         console.log(`5 x ${i} = ${5*i}`);

//     } else{

//         console.log(`${num} x ${i} = ${num*i}`);  
//     }
// }