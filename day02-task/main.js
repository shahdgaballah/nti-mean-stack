//smart user checker app
// var name = prompt("What is your name?");
// var birthYear= prompt("What is your birth year?");
// var isStudent=confirm("Are you a student?");

// var currentYear = new Date().getFullYear();
// var currentAge = currentYear - birthYear;

// var category;
// if(currentAge <13){
//     category = "Kid";
    
// }else if(currentAge>=13 && currentAge<=17){
//     category = "Teen";
    
// }else if(currentAge>=18 && currentAge<=59){
//     category = "Adult";
    
// }else if(currentAge>=60){
//     category = "Senior";
    
// }
// var studentMessege;
// if(isStudent){
//     studentMessege = "Don't forget to study hard";
    
// }else{
//     console.log(isStudent);
    
// }

// var messege = `Hello ${name}, You are ${currentAge}\nCategory: ${category}\n${studentMessege}`
// console.log(messege);

// window.alert(messege);

// document.getElementById("res").innerText = messege;

//task02
var name=prompt("What is your name?");
var age=prompt("What is your age?");
var experienceYears=Number(prompt("What are your years of experience?"));
var salary=Number(prompt("What is your salary?"));
var rating=Number(prompt("How do you rate yourself (from 1 to 10)?"));

var jobCategory;
if(experienceYears <2){
    jobCategory = "Junior";
    
}else if(experienceYears>2 && experienceYears<5){
    jobCategory = "Mid-level";
    
}else if(experienceYears>5 && experienceYears<10){
    jobCategory = "Senior";
    
}else if(experienceYears>=10){
    jobCategory = "Expert";
    
}

var performanceLevel;
switch(true){
    case (rating>=9):
        performanceLevel = "Excellent";
        break;
    case (rating>=7 && rating<=8):
        performanceLevel = "Good";
        break;
    case (rating>=5 && rating<=6):
        performanceLevel = "Average";
        break;
    case (rating<5):
        performanceLevel = "Needs improvement";
        break;
        
}
var bonus,finalSalary;
if(experienceYears>=0 && experienceYears<=2){
    bonus = salary * 0.1;
    finalSalary = salary + bonus;
}else if(experienceYears>=3 && experienceYears<=5){
    bonus = salary * 0.15;
    finalSalary = salary + bonus;
}else if(experienceYears>5){
    bonus = salary * 0.2;
    finalSalary = salary + bonus;
}
var workingHour = new Date().getHours();
var workshift;

if(workingHour>=9 && workingHour<18){
    workshift="Day shift";
}else{
    workshift="Night shift";
}

var report = `Employee ${name} aged ${age}\nYears of experience: ${experienceYears}\nJob category: ${jobCategory}\nPerformance level: ${performanceLevel}\nBonus: ${bonus} and Final salary: ${finalSalary}\nWorking shift: ${workshift}`

console.log(report);

window.alert(report);

document.getElementById("res").innerText=report;