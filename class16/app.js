// var num = -3.8
// var roundOff = Math.round(num)
// var ceilOff=  Math.ceil(num)
// var floorOff=  Math.floor(num)
// console.log(num );
// console.log("Round off",roundOff ); //-4
// console.log("Ceil: ",ceilOff );   //-3
// console.log("Floor: ",floorOff );//-4   -5 -4 -3 -2 -1 0 1 2 3


// var random =( Math.random() *2)  +1
// console.log(Math.floor(random))

// var userCoin = prompt("Enter heads or tails").toLowerCase(); 
// var coin = Math.random() * 2; 
// var tossed = Math.floor(coin) + 1; 
// var result =""
// if (tossed === 1) {
//     result = "heads"
// } else {
//     result ="tails"
// }

// if(userCoin === result){
//     console.log("You win! coin landed on ", result );
// }else if(userCoin === "heads" || userCoin ==="tails"){
//     console.log("You lose! coin landed on ", result );
// }else{
//     console.log("Invaild Input.");
// }


// var num = parseInt(prompt("Enter a number"))
// console.log(num + 10);


// console.log(parseFloat("1.0989"));


// console.log(Number("9789.98493"));

// var num = 123
// // var str = num.toString()
// var str = String(num)
// console.log(num, str);


var ran = Math.random()
var fix = ran.toFixed(4)
console.log(ran , Number(fix));

console.log(Math.abs(8));