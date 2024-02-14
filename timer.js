
//Initialising variables
/*
const initial = document.getElementById("initial");
let begin = 2;
let timeleft = document.getElementById("time")
const timer = c
const exercise = document.getElementById("exercise");
const exArr = ["Push Up", "Kettlebell Swing", "Kettlebell Press", "Rows", "Plank", "Burpees", "Goblet Squat"];
const click = document.getElementById("start").addEventListener("click", callAllCounts, { once: true });
const clear = document.getElementById("clear").addEventListener("click", startAgain);
let pauseBool = true;
*/

let timeleft = document.getElementById("time")
class Workout{
    constructor( timeleft){
      this.timeleft = timeleft
    }
    showTime(){
      console.log(this.timeleft.value)
    }
}

const workout1 = new Workout(timeleft) 
workout1.showTime


function callAllCounts() {
  initialCount()
  setTimeout(mainCount, 3000)
  //setTimeout(generateExercise, 3000)

}

function pause() {
  pauseBool = !pauseBool;
}


// Initial 3,2,1 countdown function
function initialCount() {


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



// Main countdown function 
function mainCount() {

  const i = Math.floor(Math.random() * 7);
  exercise.innerHTML = exArr[i]; // Generates first random exercise from the array

  setInterval(function () {


    if (timeleft <= 998) {
      initial.classList.add("initial"); //Hides the initial countdown after 1 second
    }

    if (timeleft >= 0 && pauseBool === true) { // Gives the pause button functionality
      timer.innerHTML = timeleft; // The thousand second countdown
      timeleft -= 1;
    }

    if (timeleft % 10 === 9 && pauseBool === true) {
      const i = Math.floor(Math.random() * 7);
      exercise.innerHTML = exArr[i]
      console.log(exercise)
    }

  }, 1000); //1 second decrements
}


/*function generateExercise() { //randomly picks a new exercise every 10 seconds

    

}
  setInterval(function () {


    const i = Math.floor(Math.random() * 7);
    exercise.innerHTML = exArr[i];

    if (timeleft >= 0) {
      exercise.innerHTML = exArr[i];
    }

  }, 10000); //10 seconds decrements for each excercise
}

*/

function startAgain() { // Reloads the entire program
  return window.location.reload();
} 