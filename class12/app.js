// for(var i=1; i<=5; i++){ //3
//     for(var j =1; j<=5-i;j++){ //1
//         document.write("&nbsp;&nbsp;")
//     }
//     for(var k =1; k<=i; k++){
//         document.write("*")
//     }
//     for(var l=2; l<=i; l++){ //3
//         document.write("*")
//     }
//     document.write("<br>")

// }

//     *
//    ***
//   ****
//  ****
// *****



// var myName = "umra"
// var myName2 = "FIZRA"
// var capitalName = myName.toUpperCase()
// console.log(myName,capitalName);
// console.log(myName2,myName2.toLowerCase());



// var cities= ["karachi","multan","lahore","swat"]
// var userCity = prompt("Enter your city name:")
// var cityTransform = userCity.toLowerCase()

// console.log(userCity, cityTransform);
// for(var i=0; i<cities.length; i++){
//     if(cityTransform === cities[i]){
//         console.log("You are eligible");
//         break
//     }
//     console.log(cities[i]);
// }

// for(var i=1;i<=10;i++){
//     console.log(i);

//     if(i >=5){
//         break
//     }
// }


// var cities= ["karachi","multan","lahore","swat","islamabad"]
// var newCities = cities.slice(1,5)
// console.log(newCities);



// var userName = "umra"
// var firstName = userName.slice(0,4)
// var lastName = userName.slice(5,10)
// console.log("First Name: ",firstName);
// console.log("Last Name: ",lastName);


var userName = "umra"
var firstLetter = userName.slice(0,1).toUpperCase()
// var remaining = userName.slice(1)
console.log(firstLetter+userName.slice(1));