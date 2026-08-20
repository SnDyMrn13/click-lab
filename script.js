
let headline=document.getElementById("headline-1");
let clueButton=document.getElementById("clue-button");
let monopolyButton=document.getElementById("monopoly-button");
let scrabbleButton=document.getElementById("scrabble-button");
let answerText=document.getElementById("answer-text");
let pickOne=document.getElementById("pick-one");


clueButton.addEventListener("click", function(){

answerText.textContent="Nope!";
answerText.style.color="red";
pickOne.textContent="";
});


monopolyButton.addEventListener("click", function(){

answerText.textContent="Correct!";
answerText.style.color="green";
pickOne.textContent="In 1903, Lizzie Magie invented The 'Landlord's game'.  It would later (with a few adjustments) become known as 'Monopoly'.";
	
});


scrabbleButton.addEventListener("click", function(){
	
answerText.textContent="Nope!";
answerText.style.color="red";
pickOne.textContent="";

});

