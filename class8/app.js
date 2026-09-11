// var arr = []
// var arr2 = new Array("Umra", "Sana")
// console.log(arr, arr2);

// var student = ["Micheal", "John" ,"Tony"]
// var score = [320 , 230 , 480]

// document.write(`Score of ${student[0]} is ${score[0] }. Percentage : ${score[0]/ 500 * 100}% <br> `)
// document.write(`Score of ${student[1]} is ${score[1] }. Percentage : ${score[1]/ 500 * 100}% <br> `)
// document.write(`Score of ${student[2]} is ${score[2] }. Percentage : ${score[2]/ 500 * 100}% <br>`)


// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then


// var colors = ["Pink" , "Blue" , "Black" , "White" , "Grey"]
// console.log(colors)

// colors.unshift("Purple")
// console.log(colors)

// var userClr = prompt("Color you want in the end")

// colors.push(userClr)
// console.log(colors)

// colors.unshift("Red" , "Brown")
// console.log(colors)

// colors.shift()
// console.log(colors)

// colors.pop()
// console.log(colors)

// var userIndex = +prompt("Which Index")
// var userClr = prompt("which Color")

// colors.splice(userIndex , 0 , userClr)
// console.log(colors)

// var deltIndex = +prompt("at which index you want to delete a color?")
// var colorQuantity = +prompt("How many colors you want to remove?")

// colors.splice (deltIndex , colorQuantity )
// console.log(colors)

// var studentScore = [320, 230, 480, 120]
// studentScore.sort()
// console.log(studentScore)

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var cityName = ["Karachi", "Lahore", "Islamabd", "Quetta", "Peshawar"]
var newCity = cityName.slice(1,4)
console.log(newCity)
