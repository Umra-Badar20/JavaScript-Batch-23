// var para = document.getElementsByTagName("p")
// para[1].innerHTML= "Umra"
// console.log();
// var para = document.getElementsByClassName("para")
// console.log(para);

// for(var i=0; i<para.length; i++){
//     para[i].style.color = "green"
// }

// var unique = document.getElementById("unique")

// var table = document.getElementsByTagName("table")
// table[0].style.border ="2px solid black"
// console.log(table[0]);
// var td= unique.getElementsByTagName("td")
// console.log(td);

// for(var i=0; i<td.length; i++){
//     td[i].style.backgroundColor="pink"
//     td[i].style.fontFamily="cursive"

// }


function changeMode(e){
    var para = document.getElementsByTagName("p")
    for(var i=0; i<para.length;i++){
        para[i].className ="fontLight"
    }
    document.body.style.backgroundColor = "black"
    console.log(e.innerHTML ="Light Mode" );    
}