function clickMe() {
    Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
    });
}

// function hideImg(e) {
//     // console.log(e);
//     // e.style.display = "none"

//     // var lab = document.getElementById("lab")
//     // console.log(lab);
//     // lab.style.display = "none"

//     var lab = document.getElementById("lab")
//     lab.className += " hideImg"
// }

function changePic(picId, url){
    console.log(picId, url);    
    document.getElementById(picId).src= url
}

function hoverMe(){
   var link= document.getElementById("link").href
   console.log(link);
   
}