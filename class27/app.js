// function changeName(){
//     var h1 = document.getElementById("name")
//     // h1.innerText= "<u>Fizra</u>"
//     h1.innerHTML= "<u>Fizra</u>"

// }
var span = document.getElementById("span")
var count = 0
function increment() {
    count++
    span.innerHTML = count
}
function decrement() {
    if (count == 0) {
        return
    }
    count--
    span.innerHTML = count
}

function getDetails(){
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var number = document.getElementById("number").value
    console.log(name,email,number);
    var myCard = document.getElementById("myCard")
    var form = document.getElementById("form")
    form.style.display="none"
    myCard.innerHTML=`<div class="id-card">
    <div class="id-header">
       <img src="https://lms.saylaniit.com/sit-logo-on-dark.png" class="id-logo" alt="logo">
       <img class="id-photo" src="https://lms.saylaniit.com/sit-logo-on-dark.png" alt="photo" />
    </div>
    <div class="id-details">
      <h1 class="m-name">Mr. John Doe</h1>
      <h3 class="m-designation">HOD - Company Name</h3>
      <div class="m-info">
          <div>
            <div class="m-info-group">
              <h4 class="info-label">Name: </h4>
              <h4 class="info-value">${name}</h4>
            </div>
            <div class="m-info-group">
              <h4 class="info-label">Phone: </h4>
              <h4 class="info-value">${number}</h4>
            </div>
            <div class="m-info-group">
              <h4 class="info-label">Email: </h4>
              <h4 class="info-value email">${email}</h4>
            </div>
           
          </div>
          <div class="m-qrcode">
            <img src="https://img.magnific.com/free-vector/scan-me-qr-code_78370-9714.jpg?semt=ais_hybrid&w=740&q=80" alt="qr-code">
          </div>
      </div>
    </div>
    <div class="id-footer">
        www.website.com
    </div>
</div>`
    
}