//task01
var nums = [-3, -2, -1, 0, 1, 2, 3];
var sumOfPos=0;
var sumOfAll=0;
for(var i=0; i<nums.length;i++){
    sumOfAll+=nums[i];
    if(nums[i]>=0){
        sumOfPos+=nums[i];
    }else{
        continue;
    }
}
console.log(sumOfPos);
console.log(sumOfAll);

nums.push(4);
nums.shift();
console.log(nums);

//task02
var Student = {
    name: "shahd",
    age: 20,
    grade: 'B',
    isGraduated: false
}
console.log(`Name: ${Student.name}\nAge: ${Student.age}`);

Student.grade = 'A';

var keys = Object.keys(Student);
console.log(keys);

var values = Object.values(Student);
console.log(values);

Student.email = "sh@gmail.com"

delete Student.isGraduated;

console.log(Student);

//task03
var students = [
    {
        name:"sama",
        age:20,
        grade: 'A',
        isGraduated: false
    },
    {
        name:"salma",
        age:21,
        grade: 'B',
        isGraduated: true
    },
    {
        name:"hana",
        age:22,
        grade: 'C',
        isGraduated: false
    }
]
var sumOfAge=0;
var avgAge;
for(var i=0; i<students.length; i++){
    sumOfAge+=students[i].age;
    avgAge=sumOfAge/students.length;
}
console.log(avgAge);

var graduateCount=0;
var notGraduateCount=0;
for(var i=0; i<students.length; i++){
    if(students[i].isGraduated==0){
        notGraduateCount++;

    }else{
        graduateCount++;
    }
}
console.log(`No. of graduates: ${graduateCount}\nNo. of undergraduates: ${notGraduateCount}`);

for (var i = 0; i < students.length; i++){
    var student = students[i];

    var keys = Object.keys(student);
    var values = Object.values(student);

    console.log(`Student ${i+1}: \nKeys: ${keys}\nValues: ${values}`);
    
}
students.push({
    name: "nour",
    age: 25,
    grade: 'C',
    isGraduated: true,
});
students[3].email= "nr@gmail.com";

for (var i = 0; i < students.length; i++){
    delete students[i].isGraduated;
}
console.log(students);


for (var i = 0; i < students.length; i++){
    console.log(`Student names: ${students[i].name}`);

    sumOfAge+=students[i].age;
    avgAge=sumOfAge/students.length;

    if(students[i].isGraduated == 0){
        notGraduateCount++;
    }else{
        graduateCount++;
}
}
console.log(`Average age: ${avgAge}`);
console.log(`No. of graduates: ${graduateCount}\nNo. of undergraduates: ${notGraduateCount}`);