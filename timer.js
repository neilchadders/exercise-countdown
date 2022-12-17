
//Initialising variables

const initial = document.getElementById("initial");
let begin = 2;
let timeleft = 999;
const timer = document.getElementById("timer");
const exercise = document.getElementById("exercise");
const exArr = ["Push Up", "Kettlebell Swing", "Kettlebell Press", "Rows", "Plank", "Burpees", "Goblet Squat"];


const click = document.getElementById("start").addEventListener("click", callAllCounts, { once: true });
const clear = document.getElementById("clear").addEventListener("click", startAgain);
let pauseBool = true;


function callAllCounts() {
  initialCount()
  setTimeout(mainCount, 3000)
  setTimeout(generateExercise, 3000)

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

    if (timeleft >= 0 && pauseBool === true) {
      timer.innerHTML = timeleft; // The thousand second countdown
      timeleft -= 1;
    }

  }, 1000); //1 second decrements

}


function generateExercise() { //randomly picks a new exercise every 10 seconds

  setInterval(function () {

    const i = Math.floor(Math.random() * 7);
    exercise.innerHTML = exArr[i];

    if (timeleft >= 0) {
      exercise.innerHTML = exArr[i];
    }

    if (pauseBool === false) {
      clearInterval(generateExercise)
    }

  }, 10000); //10 seconds decrements for each excercise
}



function startAgain() { // Reloads the entire program
  return window.location.reload();
} 