
//Initialising variables

var initial = document.getElementById("initial");
var begin = 2;
var timeleft = 999;
var timer =   document.getElementById("timer");
var exercise = document.getElementById("exercise");
var exArr = ["Push Up", "Kettlebell Swing", "Kettlebell Press","Rows", "Plank", "Burpees", "Goblet Squat"];


var click = document.getElementById("start").addEventListener("click", count, {once : true});
var clear = document.getElementById("clear").addEventListener("click", startAgain);



// Main Function

function count(){

initial.classList.remove("hide");
exercise.classList.remove("hide");

  
// Initial countdown function
setInterval(function(){

if (begin >= 1){
    initial.innerHTML = begin;
     begin -= 1;

   }

   else if (begin == 0)
    initial.innerHTML="Go!";



    }, 1000);




// Main countdown function  
setTimeout(function() {

  var i = Math.floor(Math.random() * 7);
  
  exercise.innerHTML = exArr[i];

 setInterval(function(){

if( timeleft <= 998){
    initial.classList.add("initial");
   }

if (timeleft >= 0){
    timer.innerHTML = timeleft;
     timeleft -= 1;
   }

    

    }, 1000);




  setInterval(function(){

   var i = Math.floor(Math.random() * 7);
    exercise.innerHTML = exArr[i];



 if (timeleft >= 0 ){
     exArr[i]; 
    exercise.innerHTML = exArr[i];
   }

 


     }, 10000);


}, 3000);


}







function startAgain () {
 
 window.location.reload();

}