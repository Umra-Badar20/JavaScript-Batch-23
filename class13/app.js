// if(false || true){

// }
// var bool = null || false || "" ||0 || "A"
// console.log(bool);

// for(var i=0; i<6; i++){
//     console.log(i);
// }
// for(var i=1; i<11; i++){
//     console.log(i,"Umra");
// }


// for(var i=1; i<=20; i++){
//     document.write(i,"Outer loop <br>")
//     for(var j =1 ; j<=5; j++){
//        document.write(j,"Umra <br>")
//     }
// }
// 1 Outer loop
// 1 Umra 
// 2 Umra 
// 3 Umra 
// 4 Umra 
// 5 Umra 

for(var i=1; i<=5; i++){
    for(var j=1; j<=4*i; j++){
        document.write("*")
    }
    document.write("<br>")

}
// *
// **
// ***
// ****