var user = {
    name:"Umra",
    education:"BSSE",
    institute:"SIT",
    course: ["WMA","GD"],
    address:{
        city:"Karachi",
        country:"Pakistan"
    }
}

// console.log(user.address.city);
// console.log(user["name"]);
// console.log(user["course"][0]);
// console.log(user["course"][1]);
// console.log(user["address"]["city"]);

for(var keys in user){
    if(Array.isArray(user[keys])){
        for(var i in user[keys]){
            console.log(`${keys}${i} = ${user[keys][i]}`);
        }       
    }else if(typeof user[keys]==="object"){
        for(var innerKeys in user[keys]){
            console.log(`${innerKeys} = ${user[keys][innerKeys]}`);
            
        }
    }    
    else{

        console.log(`${keys} = ${user[keys]}`);   
    }
}

// var arr = ["a"]
// var obj={}
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));
// console.log(typeof arr);
// console.log(typeof obj);

