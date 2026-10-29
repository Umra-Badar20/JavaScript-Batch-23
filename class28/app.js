// function getCity(){
//     var zip = document.getElementById("zip").value
//     var city
//     switch(zip){
//         case "74000":
//             city = "Karachi";
//             break;
//         case "44000":
//             city = "Islamabad";
//             break;
//         case "54000":
//             city = "Lahore";
//             break;
//         default :
//         city="Invalid Zip Code";
//     }
//     document.getElementById("CityName").value = city
//     console.log(zip, city);  
// }
// function getZip(){
//     var city = document.getElementById("CityName").value
//     var zip
//     switch(city){
//         case "Karachi":
//             zip = "74000";  
//             break;
//         case "Islamabad":
//             zip = "44000";  
//             break;
//         case "Lahore":
//             zip = "54000";  
//             break;
//         default :
//         zip="Invalid City Name";
//     }
//     document.getElementById("zip").value = zip
//     console.log(city, zip);
// }
// function getName(){
// // var name = document.getElementById("name").value
// // console.log(name);
// document.getElementById("name").value = "Umra"
// }




function fullPara() {
    var lessPara = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam assumenda commodi distinctio mollitia ipsa fugit autem tenetur voluptatem ea similique nemo ratione,"
    var fullPara = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam assumenda commodi distinctio mollitia ipsa fugit autem tenetur voluptatem ea similique nemo ratione, ad dolor id quae quidem quaerat culpa, repellendus consectetur minima optio! Veniam cumque modi quia exercitationem cum voluptate itaque obcaecati delectus natus quos recusandae voluptates vel, eaque maiores architecto quo inventore consequuntur, eos quasi aspernatur iusto! Exercitationem dolore expedita autem modi, repellat nihil blanditiis quis, at, cum corporis fuga optio sequi sit sint aperiam fugiat deserunt explicabo perspiciatis nisi. Expedita iusto possimus unde quae modi odio consequatur laboriosam. Ullam aspernatur totam sit quaerat facilis sequi officia! Quas, consectetur?"
    var link = document.getElementById("link").innerHTML
    if (link === "See more") {
        document.getElementById("para").innerHTML = fullPara
        document.getElementById("link").innerHTML = "See less"
    } else {
        document.getElementById("para").innerHTML = lessPara
        document.getElementById("link").innerHTML = "See more"
    }

}


function inserName(){
    var name = document.getElementById("name")
    name.innerText ="<b><i>Umra</i></b>"
}