var day = "mon".toLowerCase()
switch (day) {
    case "sat":
    case "sun":
        console.log("Weekend");
        break;

    case "fri":
        console.log("Namaz prho");
        break;
    case "mon":
    case "tue":
    case "wed":
    case "thu":
        console.log("Weekdays, kaam kro");
        break;
    default:
        console.log("Invalid day, Days name yad kro");
}

// for(var i=0; i<10; i++){
//     if(i==5){
//         break
//     }
//     console.log(i+1);
// }

// function calculateOT(hoursWorked){
//     var regHours= 40
//     var OTpay =12

//     hoursWorked= Math.floor(hoursWorked)

//     if(hoursWorked >regHours){
//         var OThours = hoursWorked- regHours
//         return OThours * OTpay
//     }else{
//         return 0
//     }
// }
// console.log(`OvertTime pay RS. ${calculateOT(45)}/-`);
// console.log(calculateOT(40));
// console.log(calculateOT(60));


var amount = +prompt("Enter a number to withdraw") //470 %100

if (!isNaN(amount) && amount <=999 && amount >=100) {
    var hundreds = Math.floor(amount / 100) //4
    amount = amount % 100 //70
    var fifty = Math.floor(amount / 50) //1
    amount %= 50

    var tens = Math.floor(amount / 10)

    console.log(`You will have ${hundreds} notes of hundred ${fifty} notes of fifty and ${tens} notes of ten`)

} else {
    console.log("Enter a valid amount");
}