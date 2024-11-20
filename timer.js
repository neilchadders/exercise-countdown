
//Variables

const addExerciseButtons = document.getElementsByClassName("add-btn");
const list = document.getElementById("list");
const timer = document.getElementById("timer")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const timeButtons = document.getElementsByClassName("time-btn")
const showTimeButton = document.getElementById("add-time")
const mainHeader = document.getElementById("main-header")

let pauseBool = true;
let exArr = []



/*STEP 1: Select exercises to be included in the circuit

This is done by:
a) Accessing the id of the button clicked which represents the exercise
b) Adding the value of the button (ie the exercise) clicked to the array
C) Option to remove the exercise from the array if clicked again
d) Option to select all exercises
e) Option to clear all exercises. If cleared, the time selection is hidden until exercises are selected
f) Display the exercises selected in the list using innerHTML

Please note I tried using a set rather than an array but lost the ability to remove items */



const setArray=  (e)=> {
     
  let exercise = e.target.id // Gets the id of the button clicked

  if(!exArr.includes(exercise)) {
    exArr.push(document.getElementById(exercise).value) // Adds the value of the button clicked to the array
  } else{
  let x = exArr.indexOf(exercise)
  exArr.splice(x,1) // Removes the exercise from the array when clicked again
} if(exercise === "Select All") { // Selects all exercises
  exArr = ["Burpees", "Plank", "Rest", "Sit Up", "Goblet Squat", "Kettlebell Swing", "Press Up"]  
}
if(exercise === "Clear") {
  exArr = [] 
  showTimeButton.style.visibility = "hidden";
   // Clears the list of exercises 
   // Removes the option to choose the time until exercises are selected
}

if (exArr.length === 0) {
  list.innerHTML = `<div><span class="workout__value">Pick your Exercises</span></div>`;
  showTimeButton.style.visibility = "hidden";
  mainHeader.style.visibility = "hidden";
} else {
  let html = `
    <div>
      <span class="workout__value">${exArr.map((e) => " " + e)}</span>
    </div>
  `;
  list.innerHTML = html;
  showTimeButton.style.visibility = "visible";
}
}

for (let button of addExerciseButtons) {
button.addEventListener("click", setArray);
}



/*STEP 2: Select the time for each circuit 
a)  The displayTimes unction makes the option to choose a time visible only after exercises selected
b)  The user can select the time for each circuit by inputting the minutes and seconds OR
c) The user can select a preset time of 3, 5 or 10 minutes 



*/
// Display the time options only when exercises are selected
const displayTimes = ()=>{
  if (exArr.length > 0) {
  mainHeader.style.visibility = "visible";
} 
}
showTimeButton.addEventListener("click", displayTimes); //


const setTime= ()=> { 

  let totalSecs = parseInt(minutes.value) * 60 + parseInt(seconds.value);
  console.log(totalSecs)
  let formatMinutes = parseInt(Math.floor(totalSecs / 60));
  let formatSeconds = parseInt(totalSecs % 60);// This is to ensure that the seconds are displayed as 2 digits and coverted to minutes if greater tha 60
 
  let formatZero = ( (formatMinutes < 10) ? "0" : "" ) + formatMinutes+ ":" + ( (formatSeconds< 10) ? "0" : "" ) + formatSeconds;
  timer.innerHTML = formatZero
  document.getElementById("countdownDiv").style.visibility = "visible";
  document.getElementById("hide-main").style.display = "none";
}
const subTime = document.getElementById("submit-time").addEventListener("click", setTime)



//timeButtons - preset time button functionality of 3, 5, 10 minutes
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


 
// starts all countdowns
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

 let interval = setInterval(function () {
  if (begin >= 1) {
    initial.innerHTML = begin;
    begin -= 1;
  } else if (begin === 0) {
    initial.innerHTML = "Go!";
    clearInterval(interval); // Clear the interval. 
  }
}, 1000);

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


let lastIndex = -1; // Initialize a variable to track the last selected index

if (secs % 10 === 0 && exArr.length > 0) {
  let newIndex;

  // Ensure the new index is different from the last index
  do {
    newIndex = Math.floor(Math.random() * exArr.length);
  } while (newIndex === lastIndex);

  lastIndex = newIndex; // Update the last index

  // Display the selected exercise
  const randomExercise = exArr[newIndex];
  exercise.innerHTML = randomExercise;
}

// Update the timer display
timer.innerHTML = formatZero;

// If time is up, show "Finished!"
if (timeInSecs === 0) {
  exercise.innerHTML = "Finished!";
}
} /*

A random index is generated.
If the generated index matches the lastIndex, the loop regenerates a new index.
Once a unique index is found, it's stored in lastIndex, and the corresponding exercise is displayed.*/

/*let z = exArr[Math.floor(Math.random() * (exArr.length-1))]

if( secs % 10 === 0) exercise.innerHTML = z
timer.innerHTML = formatZero;
if( timeInSecs === 0) exercise.innerHTML = "Finished!"
}
*/

// Main countdown function 
const mainCount =()=> {
 let i = Math.floor(Math.random() * exArr.length);
  exercise.innerHTML = exArr[i]; // Generates first random exercise from the array

  setInterval(function () {
      initial.classList.add("initial"); //Hides the initial countdown after 1 second   
  }, 1000); //1 second decrements
}



const startAgain = ()=>  window.location.reload(); //Clear and restart
const clear = document.getElementById("clear").addEventListener("click", startAgain);