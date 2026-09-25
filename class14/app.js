// var birthMonth = prompt("Enter your birth month:")
// var monthLength =birthMonth.length

// if(monthLength >3){
//     birthMonth= birthMonth.slice(0,3)
// }
// console.log(birthMonth, monthLength);

// i study in smit institute

// var string = prompt("Where do you study?")
// for(var i =0; i<string.length; i++){
//     // console.log(string.slice(i,i+4));
//     if(string.slice(i,i+4) =="smit" || string.slice(i,i+6) =="aptech"){
//         console.log("You can participate in Hackathon!");
//         break;
//     }
// }

// console.log(string.indexOf("smit"));
// if(string.indexOf("smit") === -1){
//     console.log("You can not participate!");
// }else{
//     console.log("You can participate in Hackathon!");

// }
var text = "Pakistan,[f] officially the Islamic Republic of Pakistan,[g] is a country in South Asia. It is the fifth-most populous country, with a population of over 241.5 million,[d] having the second-largest Muslim 'population' in the world as of 2023. Islamabad is the nation's capital, while Karachi is its largest city and financial centre. Pakistan is the 33rd-largest country by area. Bounded by the Arabian Sea on the south, the Gulf of Oman on the southwest, and the Sir Creek on the southeast, it shares land borders with India to the east; Afghanistan to the west; Iran to the southwest; and China to the northeast. It shares a maritime border with Oman in the Gulf of Oman, and is separated from Tajikistan in the northwest by Afghanistan's narrow Wakhan Corridor Pakistan."
// console.log(text.indexOf("Pakistan"));
// console.log(text.lastIndexOf("Pakistan"));


var newText =text.replace("Pakistan","<b>Saudi Arabia</b>")
var newTextRegex =text.replace(/Pakistan/g,"<b>Saudi Arabia</b>")
var newTextAll =text.replaceAll("Pakistan","<b>Saudi Arabia</b>")
document.write("<h1>Original Text</h1>",text,"<br><br>")
document.write("<h1>Replace Text</h1>",newText,"<br><br>")
document.write("<h1>regex Text</h1>",newTextRegex,"<br><br>")
document.write("<h1>ReplaceAll Text</h1>",newTextAll)












var userName = "umra"
// var firstletter = userName.slice(0,1)
// console.log(firstletter.toUpperCase()+ userName.slice(1));
// console.log(userName.charAt(0).toUpperCase()+userName.slice(1));