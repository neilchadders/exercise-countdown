
//Initialising variables

const initial = document.getElementById("initial");
let begin = 2;
let timeleft = 999;
const timer = document.getElementById("timer");
const exercise = document.getElementById("exercise");
const exArr = ["Push Up", "Kettlebell Swing", "Kettlebell Press", "Rows", "Plank", "Burpees", "Goblet Squat"];


const click = document.getElementById("start").addEventListener("click", count, { once: true });
const clear = document.getElementById("clear").addEventListener("click", startAgain);



// Main Function

function count() {

  initial.classList.remove("hide");
  exercise.classList.remove("hide");


  // Initial countdown function
  setInterval(function () {

    if (begin >= 1) {
      initial.innerHTML = begin;
      begin -= 1;

    }
    else if (begin === 0)
      initial.innerHTML = "Go!";
  }, 1000);




  // Main countdown function  
  setTimeout(function () {

    const i = Math.floor(Math.random() * 7);

    exercise.innerHTML = exArr[i];

    setInterval(function () {

      if (timeleft <= 998) {
        initial.classList.add("initial");
      }

      if (timeleft >= 0) {
        timer.innerHTML = timeleft;
        timeleft -= 1;
      }
    }, 1000);




    setInterval(function () {

      var i = Math.floor(Math.random() * 7);
      exercise.innerHTML = exArr[i];

      if (timeleft >= 0) {
        exArr[i];
        exercise.innerHTML = exArr[i];
      }
    }, 10000);
  }, 3000);
}


function startAgain() {
  return window.location.reload();
}