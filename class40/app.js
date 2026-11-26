var quiz=[
    {
        question:"Q1: How to add elements in array from last?",
        opt1: "push()",
        opt2: "pop()",
        opt3: "shift()",
        opt4: "unshift()",
        ans: "push()",
    },
    {
        question:"Q2: What is the full form of DOM?",
        opt1: "Document Oriented model",
        opt2: "Document Oriented mode",
        opt3: "Document Object mode",
        opt4: "Document Object model",
        ans: "Document Object model",
      
    },
    {
        question:"Q3: How to add elements in array from start?",
        opt1: "push()",
        opt2: "pop()",
        opt3: "shift()",
        opt4: "unshift()",
        ans: "unshift()",
    },
]

var index=0
var score =0
function renderQuiz(){
    var quizContainer= document.getElementById("quizContainer")
    var option = document.getElementsByName("option")
    
    for(var i=0; i<option.length; i++){
        // console.log(option[i].value, option[i].checked);
        if(option[i].checked){
            console.log(quiz[index-1].ans, option[i].value);

            if(quiz[index-1].ans ===option[i].value)  {
                score++
                
            }
            console.log(score);
        }
        
    }
    if(!quiz[index]){
        quizContainer.innerHTML=`<h1 class="text-center">Your Score is : ${score} </h1>`
        return
    }

    quizContainer.innerHTML=`
     <p class="fw-bold fs-5">${quiz[index].question}</p>
            <label class="border-bottom p-2"> <input class="" type="radio" name="option" value="${quiz[index].opt1}"> ${quiz[index].opt1}</label>
            <label class="border-bottom p-2"> <input class="" type="radio" name="option" value="${quiz[index].opt2}"> ${quiz[index].opt2}</label>
            <label class="border-bottom p-2"> <input class="" type="radio" name="option" value="${quiz[index].opt3}"> ${quiz[index].opt3}</label>
            <label class="border-bottom p-2"> <input class="" type="radio" name="option" value="${quiz[index].opt4}"> ${quiz[index].opt4}</label>
           
            <button id="next" class="btn btn-success w-25 mt-3 mx-auto" onclick="renderQuiz()">Next</button>
    ` 
    if(index ===quiz.length-1){
        var nextBtn = document.getElementById("next")
        nextBtn.innerHTML ="Submit"
        nextBtn.classList.add("btn-danger")
    }   
index++
}
renderQuiz()