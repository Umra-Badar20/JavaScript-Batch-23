
var student2={
    name:"Fizra",
    email:"fizra@gmail.com",
    rollNo:123
}

var student1={
    name:"Umra",
    email:"umra@gmail.com",
    rollNo:1234,
    courses:["WMA", "GD"],
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8zZO9-6t_PL1XRC_RTlXrtNvBVYnb6HGQAokwIYp1A&s",
    address:{
        city:"Karachi",
        country:"Pakistan"
    },
    greet: function(){
        alert("Hello "+ this.name)
    }
}
var student3={
    name:"Sundus",
    email:"sundus@gmail.com",
    rollNo:1234,
    courses:["WMA", "GD"],
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8zZO9-6t_PL1XRC_RTlXrtNvBVYnb6HGQAokwIYp1A&s",
    address:{
        city:"Karachi",
        country:"Pakistan"
    },
    greet: function(){
        alert("Hello "+ this.name)
    }
}

student1.contact= "03123456789"
console.log(student1);
delete student1.rollNo
// delete student1.name
console.log("name" in student1);
console.log("city" in student1.address);

document.getElementById("profile").innerHTML=`
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${student1.img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${student1.name}</h5>
        <p class="card-text">
        Email: ${student1.email} <br>
        Course: ${student1.courses[1]} <br>
        Address: ${student1.address.city}, ${student1.address.country}

        </p>
           <button class="btn btn-primary" onclick="student1.greet()">Greet</button>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>

      </div>
    </div>
  </div>
</div>


 <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${student3.img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${student3.name}</h5>
        <p class="card-text">
        Email: ${student3.email} <br>
        Course: ${student3.courses[1]} <br>
        Address: ${student3.address.city}, ${student3.address.country}

        </p>
           <button class="btn btn-primary" onclick="student3.greet()">Greet</button>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>

      </div>
    </div>
  </div>
</div>
`










// document.write(`Student name is ${student1.name}, email is ${student1.email} and roll number is ${student1.rollNo}, Enrolled course is ${student1.courses[1]} <br>
//     Address:`)

// document.write(`Student name is ${student2.name}, email is ${student2.email} and roll number is ${student2.rollNo}`)
