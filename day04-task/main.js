//task01
function multiply(x, y){
    var res = x*y;
    return res;
}
console.log(multiply(3,3));


function calculate(x, y, multiply){
    var res = multiply(x,y);
    return res;
}
console.log(calculate(2,3,multiply));

function displayResult(calculate){
    console.log(calculate());
}
displayResult(function() {
    return calculate(3, 4, multiply);
});

//task02
function greetUser(){
    console.log("Hello, User!");
    
}
setTimeout(greetUser, 3000);

var count = 10;
var secs=0;
function countdown(){
    if(count==0){
        console.log("Time's up");
    }else{
        console.log(count + "\n");
        count--;
        secs++;
        if(secs==5){
            clearInterval(1);

            var id = setTimeout( function(){
                console.log("This will be cleared after 5 secs!");
                
            }, 6000);
            clearTimeout(id);
        }
    }
}
setInterval(countdown, 1000);

