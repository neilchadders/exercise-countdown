
//ADD Exercises - 

const addExerciseButtons = document.getElementsByClassName("add-btn");
const list = document.getElementById("list");
const timer = document.getElementById("timer")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const timeButtons = document.getElementsByClassName("time-btn")


let pauseBool = true;
let exArr = []

const setArray=  (e)=> {
     
  let ex = e.target.id

  if(!exArr.includes(ex)) {
    exArr.push(document.getElementById(ex).value)
  } else{
  let x = exArr.indexOf(ex)
  exArr.splice(x,1)
} if(ex === "Select All") {
  exArr = ["Burpees", "Plank", "Rest", "Sit Up", "Goblet Squat", "Kettlebell Swing", "Press Up"]  
}
console.log(exArr)

  let html = `
    <div>
      <span class="workout__value">${exArr.map(e => " " + e)}</span>
      
    </div>
`;

list.innerHTML = html;
}

for (let button of addExerciseButtons) {
button.addEventListener("click", setArray);
}



//Set Circuit Time

const setTime= ()=> { 
 
  let formatZero = ( (minutes.value < 10) ? "0" : "" ) + minutes.value + ":" + ( (seconds.value< 10) ? "0" : "" ) + seconds.value;
  timer.innerHTML = formatZero
  document.getElementById("countdownDiv").style.visibility = "visible";
  document.getElementById("hide-main").style.display = "none";
}
const subTime = document.getElementById("submit-time").addEventListener("click", setTime)



//timeButtons - preset time button functionality 



const clickTimeButton = (e) =>{
  minutes.value = parseInt(e.target.id)
  seconds.value = 0
}
for (let button of timeButtons) {
  button.addEventListener("click", clickTimeButton);  
  }



// Pause Functionality
const pause = ()=> { pauseBool = !pauseBool}
const pauseButton = document.getElementById("pause").addEventListener("click", pause)



/*
const callAllCounts = () => {
  initialCount()
  setTimeout(mainCount, 3000)
  setTimeout(setExercise, 3000)
} */

  async function callAllCounts() {
    // Start the initial countdown
    initialCount();
  
    // Wait for 3000 ms (3 seconds) using async/await
    await new Promise((resolve) => setTimeout(resolve, 3000));
  
    // Proceed to mainCount and setExercise
    console.log("works");
    mainCount();
    setExercise();
  }
  

const click = document.getElementById("start").addEventListener("click", callAllCounts, { once: true }); //ensures can only run once




// Initial 3,2,1 countdown function

const hidden = document.getElementsByClassName("hide")
const initial = document.getElementById("initial");
let begin = 2;


const initialCount = () => {
  initial.classList.remove("hide"); //Removes hidden css property when app started
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




//Reduce timer by 1 second and if multiple of 10 select new exercise
let timeInSecs;
const exercise = document.getElementById("exercise");
let secs;

const setExercise = () => {

secs = parseInt(minutes.value) * 60  + parseInt(seconds.value)
if (pauseBool)
timeInSecs = secs;
ticker = setInterval("tick()", 1000); 
}

const tick= () =>{
if (timeInSecs > 0 && pauseBool) {
timeInSecs--; 
}


let mins = Math.floor(timeInSecs/60);
secs = timeInSecs %60;
let formatZero = ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;

let z = exArr[Math.floor(Math.random() * (exArr.length-1))]

if( secs % 10 === 0) exercise.innerHTML = z
timer.innerHTML = formatZero;
if( timeInSecs === 0) exercise.innerHTML = "Finished!"
}


// Main countdown function 
const mainCount =()=> {
 let i = Math.floor(Math.random() * (exArr.length-1));
  exercise.innerHTML = exArr[i]; // Generates first random exercise from the array

  setInterval(function () {
      initial.classList.add("initial"); //Hides the initial countdown after 1 second   
  }, 1000); //1 second decrements
}



const startAgain = ()=>  window.location.reload(); //Clear and restart
const clear = document.getElementById("clear").addEventListener("click", startAgain);