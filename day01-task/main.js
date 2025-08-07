///task01
var name = "shahd";
console.log(name);
console.log(typeof name);

var age = 20;
console.log(age);
console.log(typeof age);

var isActive = true;
console.log(isActive);
console.log(typeof isActive);

var middle_name = null;
console.log(middle_name);
console.log(typeof middle_name);

var last_name = undefined;
console.log(last_name);
console.log(typeof last_name);

var firstName = "shahd";
var lastName = "gaballah";

var oldFullName = firstName + " " + lastName;
console.log(oldFullName);

var newFullName = `${firstName} ${lastName}`;
console.log(newFullName);

///task02
var username = "reshahd";
var password = "1234Shg"

if(username == ""){
    console.log("Username is required");
}
else{
    console.log(username);
}
if(password.length<8){
    console.log("Password must be at least 8 charachters");
}
else{
    console.log(password);
}
