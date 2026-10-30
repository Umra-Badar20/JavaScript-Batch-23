
function addStudent(event){
    event.preventDefault()
    var nameValue = document.getElementById("studentName").value
    var ageValue = document.getElementById("studentAge").value
    var studentTableBody = document.getElementById("studentTableBody")
    
    // var row= document.createElement("tr")
    studentTableBody.innerHTML += `
    <tr>
    <td>${nameValue}</td>
    <td>${ageValue}</td>
    <td> 
        <button onclick="editRow(this)">Edit</button>
        <button onclick="deleteRow(this)">Delete</button>
    </td>
    </tr>
    `
    // studentTableBody.appendChild(row)
}
function deleteRow(e){
    var activeRow= e.parentNode.parentNode
    console.log(activeRow);
    activeRow.remove()
    
}
function editRow(e){
    var activeRow= e.parentNode.parentNode
    
    var currentName =activeRow.children[0].textContent
    var currentAge =activeRow.children[1].textContent
    document.getElementById("editFormContainer").style.display="block"
    document.getElementById("editName").value =currentName
    document.getElementById("editAge").value =currentAge
   
}