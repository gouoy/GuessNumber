let computerNum = 0; 
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let Result = document.getElementById("resultArea");

playButton.addEventListener("click", playNumber);

function pickRan(){
 computerNum = Math.floor(Math.random()*100)+1;
 console.log("정답은", computerNum)
}
/*
function gobutton(){
    if(){
     if(==computerNum){s
        console.log()
     } else{s
        console.log()
     }

}
function resetButton(){
*/

function playNumber(){
 let userValue = userInput.value;
  if(userValue < computerNum){
    Result.textContent ="up!" 
  } else if(userValue > computerNum){
    Result.textContent ="down!"
  } else if(userValue == computerNum){
    Result.textContent ="congraturations!"
  }
 }
pickRan();
playNumber();