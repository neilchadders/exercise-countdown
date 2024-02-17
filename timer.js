
//Initialising var

const hidden = document.getElementsByClassName("hide")
const initial = document.getElementById("initial");
let begin = 2;


let timer = document.getElementById("timer")
const exercise = document.getElementById("exercise");
let exArr = []



const click = document.getElementById("start").addEventListener("click", callAllCounts, { once: true });
const clear = document.getElementById("clear").addEventListener("click", startAgain);
let pauseBool = true;

let timeleft =  document.getElementById("time")


//Constructor
class Workout{
    constructor( timeleft){
      this.timeleft = timeleft.value
    }

     burpee(){
        exArr.push(document.getElementById("Burpee").value)
      }
      plank(){
        exArr.push(document.getElementById("Plank").value)
      }
      rest(){
        exArr.push(document.getElementById("Rest").value)
      }
      situp(){
        exArr.push(document.getElementById("Sit Up").value)
      }
      squat(){exArr.push(document.getElementById("Goblet Squat").value)
    }
      swing(){
        exArr.push(document.getElementById("Kettlebell Swing").value)
      }
      pressup(){
        exArr.push(document.getElementById("Press Up").value)
      }
      
    setTime(){ 
      timer.innerHTML = timeleft.value // trigerred in HTML on submit button
    }
    setExercise(){      
      setInterval(function () {
        if(timeleft.value >= 0 && pauseBool)
        timer.innerHTML = timeleft.value -- //This subtracts 1 every second
       
        if(timer.innerHTML % 10 === 0 && timer.innerHTML > 0 && pauseBool) { //selects random exercise
    
        exercise.innerHTML = exArr[Math.floor(Math.random() * exArr.length)]
          console.log(exArr)
          }
      }, 1000);
    }
    }


const workout1 = new Workout(timeleft) 




function callAllCounts() {
  initialCount()
  setTimeout(mainCount, 3000)
  setTimeout(workout1.setExercise, 3000)
}

const pause = ()=> pauseBool = !pauseBool;

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



// Main countdown function 
function mainCount() {
 // let i = Math.floor(Math.random() * 7);
  //exercise.innerHTML = exArr[i]; // Generates first random exercise from the array

  setInterval(function () {
      initial.classList.add("initial"); //Hides the initial countdown after 1 second   
  }, 1000); //1 second decrements
}



function startAgain() { // Reloads the entire program
  return window.location.reload();
} 




// ADD EXERCISE



/*

const createNote = (uid, title, text, date) => {
  const note = document.createElement("div");
  note.className = "note";
  note.id = uid;
  note.innerHTML = `
    <div class="note-title">${title}</div>
    <div class="note-controls">
      <button class="note-edit" onclick="editNote(${uid})">
        Edit
      </button>
      <button class="note-save" style="display:none" onclick="saveNote(${uid})">
        Save
      </button>
      <button class="note-delete" onclick="deleteNote(${uid})">
        Delete
      </button>
    </div>
    <div class="note-text">${text}</div>
    <div class="note-date">${date}</div>
  `;

  notesWrapper.insertBefore(note, notesWrapper.firstChild);
};
*/