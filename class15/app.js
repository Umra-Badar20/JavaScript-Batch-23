// // a-z 97-122
// // A-Z 65-90
// // 0-9 48-57

// var password = prompt("Enter your password:");
// var hasCapitalAlphabets = false
// var hasSmallAlphabets = false
// var hasNumber = false
// var startsWithNumber = false

// if (password.length < 6) {
//     alert("It must be at least 6 characters long");
// } else{
//     for(var i=0; i<password.length;i++){
//         // console.log(password.charCodeAt(i), password.charAt(i));
//         var code = password.charCodeAt(i)
//         if(code >=65 && code <= 90){
//             hasCapitalAlphabets = true
//         }
//         if(code >=97 && code <= 122){
//             hasSmallAlphabets =true
//         }
//         if(code >=48 && code <= 57){
//             hasNumber=true
//         }
//         if(i===0 && code >=48 && code <= 57){
//             startsWithNumber=true
//         }    
//     }
// }
// if(!hasCapitalAlphabets ){
//     alert("Password must contain Capital alphabets")
// }
// if(!hasSmallAlphabets ){
//     alert("Password must contain Small alphabets")
// }
// if(!hasNumber){  
//     alert("Password must contain numbers")
// }
// if(startsWithNumber){
//     alert("Password must not start with numbers")

// }


var str = "The quick brown fox jumps over the lazy dog"
var words= str.toLowerCase().split(" ")
var count = 0
for(var i=0; i<words.length; i++){
    // console.log(words[i]);
    if(words[i] === 'the'){
        count++
    }
}
console.log(`The appears ${count} time's in string`);