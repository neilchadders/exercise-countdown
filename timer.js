
//Initialising var

const hidden = document.getElementsByClassName("hide")
const initial = document.getElementById("initial");
let begin = 2;


const timer = document.getElementById("timer")
const exercise = document.getElementById("exercise");
let exArr = []



const click = document.getElementById("start").addEventListener("click", callAllCounts, { once: true });
const clear = document.getElementById("clear").addEventListener("click", startAgain);
let pauseBool = true;
let buttonBool = false;

//const timeleft =  document.getElementById("time")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let buttonClick = 0;
let secs;

//Constructor
class Workout{

      constructor( minutes, seconds){
     
      this.minutes = minutes.value
      this.seconds = seconds.value
     
    }

    setExercise(assignId){
      
      let ex = assignId
      if(!exArr.includes(ex)) {
        exArr.push(document.getElementById(ex).value)
      } else{
      let x = exArr.indexOf(ex)
      exArr.splice(x,1)
    } if(ex === "Select All") {
      exArr = ["Burpees", "Plank", "Rest", "Sit Up", "Goblet Squat", "Kettlebell Swing", "Press Up"]  
    }
    console.log(exArr)
    }
 
    setTime(){ 
      
      let formatZero = ( (minutes.value < 10) ? "0" : "" ) + minutes.value + ":" + ( (seconds.value < 10) ? "0" : "" ) + seconds.value;
      timer.innerHTML = formatZero
     // trigerred in HTML on submit button
    }

    timeButton = (id) => {
      minutes.value= parseInt(id)
      seconds.value = 0
    
    }
}

const workout1 = new Workout(minutes, seconds) 




function callAllCounts() {
  initialCount()
  setTimeout(mainCount, 3000)
  setTimeout(setExercise, 3000)
}

let pause = ()=> {
  pauseBool = !pauseBool;
  console.log(exArr)
}


// Initial 3,2,1 countdown function
const initialCount = () => {
  initial.classList.remove("hide"); //Removes hidden css property 
  exercise.classList.remove("hide");

  setInterval(function () {

    if (begin >= 1) {
      initial.innerHTML = begin;
      begin -= 1;
    }
    else if (begin === 0) {
      initial.innerHTML = "Go!";
    }

  }, 1000); //1 second decrements
}

let timeInSecs;


function setExercise() {
let test = parseInt(seconds.innerHTML)

secs = parseInt(minutes.value) * 60  + parseInt(seconds.value)
if (pauseBool)
timeInSecs = secs;
ticker = setInterval("tick()", 1000); 
}

function tick( ) {
if (timeInSecs > 0 && pauseBool) {
timeInSecs--; 
}


console.log(timeInSecs)

let mins = Math.floor(timeInSecs/60);
secs = timeInSecs %60;
let formatZero = ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;

let z = exArr[Math.floor(Math.random() * exArr.length-1)]

if( secs % 10 === 0) exercise.innerHTML = z


timer.innerHTML = formatZero;
}


// Main countdown function 
function mainCount() {
 let i = Math.floor(Math.random() * exArr.length-1);
  exercise.innerHTML = exArr[i]; // Generates first random exercise from the array

  setInterval(function () {
      initial.classList.add("initial"); //Hides the initial countdown after 1 second   
  }, 1000); //1 second decrements
}



function startAgain() { // Reloads the entire program
  return window.location.reload();
} 

