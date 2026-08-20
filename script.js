
let headline=document.getElementById("headline-1");
let clueButton=document.getElementById("clue-button");
let monopolyButton=document.getElementById("monopoly-button");
let scrabbleButton=document.getElementById("scrabble-button");
let answerText=document.getElementById("answer-text");


clueButton.addEventListener("click", function(){

answerText.textContent="Nope!";
answerText.style.color="red";
});


monopolyButton.addEventListener("click", function(){

answerText.textContent="Correct!";
answerText.style.color="green";
	
});


scrabbleButton.addEventListener("click", function(){
	
answerText.textContent="Nope!";
answerText.style.color="red";

});

