
//Initialising var
const initial = document.getElementById("initial");
let begin = 2;
let timer = document.getElementById("timer")
const exercise = document.getElementById("exercise");
const exArr = ["Push Up", "Kettlebell Swing", "Kettlebell Press", "Rows", "Plank", "Burpees", "Goblet Squat"];
const click = document.getElementById("start").addEventListener("click", callAllCounts, { once: true });
const clear = document.getElementById("clear").addEventListener("click", startAgain);
let pauseBool = true;

let timeleft =  document.getElementById("time")

class Workout{
    constructor( timeleft){
      this.timeleft = timeleft.value
    }
    setTime(){
      timer.innerHTML = timeleft.value // trigerred in HTML on submit button
    }
    setExercise(){
      setInterval(function () {
        if(timeleft.value >= 0 && pauseBool)
        timer.innerHTML = timeleft.value --
        //console.log(timer.innerHTML)
        if(timer.innerHTML % 10 === 0 && timer.innerHTML > 0 && pauseBool) {
        let x = Math.floor(Math.random() * 7);
        exercise.innerHTML = exArr[x]
          }
      }, 1000);
    }
}

const workout1 = new Workout(timeleft) 



const callAllCounts = () => {
  initialCount()
  setTimeout(mainCount, 3000)
  setTimeout(workout1.setExercise, 3000)
}

const pause = () => pauseBool = !pauseBool;
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
  let i = Math.floor(Math.random() * 7);
  exercise.innerHTML = exArr[i]; // Generates first random exercise from the array

  setInterval(function () {
      initial.classList.add("initial"); //Hides the initial countdown after 1 second   
  }, 1000); //1 second decrements
}



function startAgain() { // Reloads the entire program
  return window.location.reload();
} 