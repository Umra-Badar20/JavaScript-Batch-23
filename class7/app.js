// var students = ["Hani", "Aniqa" , "Sundus", "Fizra", "Eraj", "Faiza"]
// var salary = [10000, 20000, 40000, 50000, 20000, 35000]
// console.log(students);
// console.log(students.length);
// console.log("Welcome "+students[2]);
// // document.write(students[5])
// document.write("My name is <b>"+ students[4] +"</b> <br> My Salary is <i>"+salary[4] +"</i> <br>" )
// document.write(`My name is <b> ${students[3]} </b> <br> My salary is <em> ${salary[3]} </em>`)

// var mixedArr = ["Umra", 50, true, undefined, null]

// console.log(typeof mixedArr[5]);

// var employes= ["Umra", "Sana", "Sara"]
// var score = [450, 300,480]
// document.write(`Score of ${employes[0]} is ${score[0]}. Percentage ${(score[0]/500) *100 }% <br>`)
// document.write(`Score of ${employes[1]} is ${score[1]}. Percentage ${(score[1]/500) *100 }% <br>`)
// document.write(`Score of ${employes[2]} is ${score[2]}. Percentage ${(score[2]/500) *100 }% <br>`)

// var employes= ["Umra", "Sana", "Sara"]
// console.log(employes);
// // employes.push("Sayma","Samina)"
// console.log(employes.push("Sayma","Samina"));
// console.log(employes);
// console.log(employes.pop());

// console.log(employes);


// var engineers = ["Umra", "Sana", "Sara"]
// engineers.shift()
// engineers.unshift("Anshara","Hafsa","Waniya")
// console.log(engineers);


// var developers = ["Umaima","Nuflah","Anzala","Alisha", "Javeria"]
// developers.splice(2,1,"Mahnoor" )
// developers.splice(0,1)
// console.log(developers);


var developers = ["Umaima","Nuflah","Anzala","Alisha", "Javeria"]
var seniorDevelopers = developers.slice(0,3)
console.log(seniorDevelopers);
