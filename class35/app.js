// var p2= document.getElementById("p2")
// // console.log(p2.parentNode.children.length);

// console.log(p2.hasAttribute("class"));
// console.log(p2.getAttribute("class"));

// var a= document.getElementsByTagName("a")[0]
// a.setAttribute("href","https://www.wikipedia.org/")
// a.setAttribute("target","_blank")
// a.setAttribute("id","link")
// console.log(a.getAttribute("target"));
// console.log(a.getAttribute("id"));
// console.log(a.attributes);

// function uniquePara(){

//     p2.setAttribute("class","unique")
// }

var p = document.createElement("p")
var text = document.createTextNode("This is a para")
p.appendChild(text)
document.body.appendChild(p)
