function deleteRow(e){
    console.log(e.parentNode.parentNode);
    // var row = e.closest("tr")
    var row = e.parentNode.parentNode
    row.remove()

}

var span = document.getElementById("number")
var count = 0


function changeNum(amount){
    count = count +amount
    console.log(count);
    span.innerText=count
}