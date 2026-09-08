// var gender = prompt("Enter your gender:")

// if(gender === "male" || gender === "Male" || gender === "MALE"){
//     console.log("Admissions open in GD");
// }else if(gender ==="female" || gender === "Female" || gender === "FEMALE"){
//     console.log("Admissions open in WMA");
// }else{
//     console.log("Admissions not available!");
// }

var eng = +prompt("Enter your marks for English")
var urdu = +prompt("Enter your marks for Urdu")
var math = +prompt("Enter your marks for Math")

var totalMarks = 300
var totalObtainedMarks = eng + urdu +math

var percentage = (totalObtainedMarks *100)/totalMarks
var grade
// if((eng >100 && urdu >100 && math>100) || ( eng <0 && urdu <0 && math<0) ){ 
if(eng >100 && urdu >100 && math>100){ 
    console.log("Invalid Marks");
}else if(eng <0 && urdu <0 && math<0){
    console.log("Invalid Marks");
}else{
    if(percentage >=80 && percentage <=100){
        grade = "A+"
        console.log(percentage+"% Grade A+" );
    }else if(percentage >=70 && percentage <80){
        grade = "A"
        console.log(percentage+"% Grade A" );
    }else if(percentage >=60 && percentage <70){
        grade= "B"
        console.log(percentage+"% Grade B" );
    }else if(percentage >=50 && percentage <60){
        grade= "C"
        console.log(percentage+"% Grade C" );
    }else if(percentage >=0 && percentage <50){
        grade= "Sorry, you are Fail!"

        console.log(percentage+"% Sorry, you are Fail!" );
    }
}
// document.write("<h2>English : "+ eng+ "</h2>")
document.write(` <table border="1">
<tr bgColor="gray">
    <th>Subjects</th>
    <th>Total Marks</th>
    <th>Obtained Marks</th>
</tr>
<tr>
    <th>English</th>
    <td>100</td>
    <td>${eng}</td>
</tr>
<tr bgColor="gray">
    <th>Urdu</th>
    <td>100</td>
    <td>${urdu}</td>
</tr>
<tr>
    <th>Math</th>
    <td>100</td>
    <td>${math}</td>
</tr>
<tr bgColor="gray">
    <th>Total</th>
    <th>${totalMarks}</th>
    <th>${totalObtainedMarks}</th>
</tr>
</table>`)
document.write(`
<h2>Percentage : ${percentage}</h2>
   <h3>Grade : ${grade}<h3>
   `)
