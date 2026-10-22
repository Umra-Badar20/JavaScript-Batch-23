function greetUser(user){
    var greet='Hello '+user; 
    console.log(greet);
}
greetUser("Umra")
greetUser("Aniqa")
greetUser()

function car(){
    alert("Land Cruiser");
}

function changeColor(event){
    console.log();
    var css =  event.style
    css.color="pink"
    css.backgroundColor = "gray"
    css.fontSize = "42px"
}

function returnFunc(event){
    var css =  event.style
    css.color="black"
    css.backgroundColor = "#fff"
    css.fontSize = "16px"
}

function dance(e){
    console.log(e.src);
    e.src="images/cat.gif";
    e.style.width ="436px"
    e.style.height ="413px"
    e.style.borderRadius= "10px"
}
function stop(e){
 e.src="./images/cat.png"
}