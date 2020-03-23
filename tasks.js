//i will be creating a basic html file for this to i have DOM to select 
let myDisplay =  document.querySelector(".display");
let myNumber =  document.querySelector(".numbers");

let myName = "Jane";
let myCourses = ["Frontend", "Mobile"]

myDisplay.innerHTML = `I am ${myName} and these are the courses i registered ${myCourses}`;

let evenNumber = "Output:<br/>";
for(let i = 1; i <= 200; i++ ){
    if(myCourses.length%2 ===0 & i%2 ===0){
        evenNumber += i + "<br/>"
        myNumber.innerHTML = ` ${evenNumber}`
    }
}