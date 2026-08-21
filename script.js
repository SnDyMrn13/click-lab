
let headline=document.getElementById("headline-1");
let clueButton=document.getElementById("clue-button");
let monopolyButton=document.getElementById("monopoly-button");
let scrabbleButton=document.getElementById("scrabble-button");
let answerText=document.getElementById("answer-text");
let pickOne=document.getElementById("pick-one");
let trivialPursuitButton=document.getElementById("trivialPursuit-button");
let monopoly2Button=document.getElementById("monopoly2-button");
let scrabble2Button=document.getElementById("scrabble2-button");
let mouseTrapButton=document.getElementById("mouseTrap-button");
let troubleButton=document.getElementById("trouble-button");
let candylandButton=document.getElementById("candyland-button");




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

trivialPursuitButton.addEventListener("click", function(){
	
	answerText.textContent="Nope!";
	answerText.style.color="red";
	pickOne.textContent="";

});

monopoly2Button.addEventListener("click", function(){
	
	answerText.textContent="Correct!";
	answerText.style.color="green";
	pickOne.textContent="Monopoly has sold over 275 million copies worldwide.";

});

scrabble2Button.addEventListener("click", function(){

	answerText.textContent="Nope!";
	answerText.style.color="red";
	pickOne.textContent="";
	
});

mouseTrapButton.addEventListener("click", function();

	answerText.textContent="Nope!";
	answerText.style.color="red";
	pickOne.textContent="";
	
});

candylandButton.addEventListener("click", function(){
	
	answerText.textContent="Correct!";
	answerText.style.color="green";
	pickOne.textContent="In 1948, Eleanor Abbott invented Candyland while she was recovering from Polio in a San Diego hospital.";
	
});

troubleButton.addEventListener("click", function(){
	
	answerText.textContent="Nope!";
	answerText.style.color="red";
	pickOne.textContent="";
	
});

