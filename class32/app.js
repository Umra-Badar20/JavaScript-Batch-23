var char1= document.getElementById("char1")
var char2= document.getElementById("char2") 
var left=0
function animateChar(){
    console.log(event.keyCode);
    if(event.keyCode == 39 && left <1490){
        left = left+10
        char1.style.left = left +"px"
        char1.style.transform= "scaleX(1)"
        char1.src ="https://www.fightersgeneration.com/characters/alicewf.gif"
        setTimeout(()=>{
            char1.src ="https://www.fightersgeneration.com/characters/alicestance.gif"
        },1000)
    }
    console.log(left);
    if(event.keyCode == 37 && left >40){
        left = left-10
        char1.style.left = left +"px"
        char1.style.transform= "scaleX(-1)"
                char1.src ="https://www.fightersgeneration.com/characters/alicewf.gif"
         setTimeout(()=>{
            char1.src ="https://www.fightersgeneration.com/characters/alicestance.gif"
            console.log("hello");           
        },1000)
    }
    if(event.keyCode == 32){

        char1.src ="https://www.fightersgeneration.com/characters/alice12.gif"
        char1.style.height= "250px"
        setTimeout(()=>{
            char1.src ="https://www.fightersgeneration.com/characters/alicestance.gif"
            char1.style.height= "200px"

        },2500)
        
    }
    console.log(left);
    
}
window.onkeydown = animateChar