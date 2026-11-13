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

// var p = document.createElement("p")
// var text = document.createTextNode("This is a para")
// p.appendChild(text)
// document.body.appendChild(p)

// var h2= document.createElement("h2")
// var text = document.createTextNode("Hello World")
// h2.appendChild(text)

// var img = document.createElement("img")
// img.setAttribute("src","https://hips.hearstapps.com/hmg-prod/images/gettyimages-2165950545-69600af8c9b0d.jpg?crop=0.670xw:1.00xh;0.134xw,0&resize=1120:*")
// img.setAttribute("height","400")
// // document.body.appendChild(img)
// // document.body.appendChild(h2)
// var main = document.getElementById("main")
// main.appendChild(h2)
// main.appendChild(img)

var main = document.getElementById("main")
main.innerHTML= `<img height="400" src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-2165950545-69600af8c9b0d.jpg?crop=0.670xw:1.00xh;0.134xw,0&resize=1120:*" alt="">`
