
let headline=document.getElementById("headline-1");
let clueButton=document.getElementById("clue-button");
let monopolyButton=document.getElementById("monopoly-button");
let scrabbleButton=document.getElementById("scrabble-button");
let answerText1=document.getElementById("answer-text1");
let pickOne1=document.getElementById("pick-one1");
let trivialPursuitButton=document.getElementById("trivialpursuit-button");
let monopoly2Button=document.getElementById("monopoly2-button");
let scrabble2Button=document.getElementById("scrabble2-button");
let mouseTrapButton=document.getElementById("mousetrap-button");
let troubleButton=document.getElementById("trouble-button");
let candylandButton=document.getElementById("candyland-button");
let answerText2=document.getElementById("answer-text2");
let pickOne2=document.getElementById("pick-one2");
let answerText3=document.getElementById("answer-text3");
let pickOne3=document.getElementById("pick-one3");
let scoreText=document.getElementById("score-1");
let score=0;
let resetButton=document.getElementById("reset-button");





clueButton.addEventListener("click", function(){
	score=score - 1;
	scoreText.textContent=score;
	answerText1.textContent="Nope!";
	answerText1.style.color="red";
	pickOne1.textContent="";
});


monopolyButton.addEventListener("click", function(){
	score=score + 1;
	scoreText.textContent=score;
	answerText1.textContent="Correct!";
	answerText1.style.color="green";
	pickOne1.textContent="In 1903, Lizzie Magie invented The 'Landlord's game'.  It would later (with a few adjustments) become known as 'Monopoly'.";
	
});


scrabbleButton.addEventListener("click", function(){
	score=score - 1;
	scoreText.textContent=score;
	answerText1.textContent="Nope!";
	answerText1.style.color="red";
	pickOne1.textContent="";

});

trivialPursuitButton.addEventListener("click", function(){
	score=score - 1;
	scoreText.textContent=score;
	answerText2.textContent="Nope!";
	answerText2.style.color="red";
	pickOne2.textContent="";

});

monopoly2Button.addEventListener("click", function(){
	score=score + 1;
	scoreText.textContent=score;
	answerText2.textContent="Correct!";
	answerText2.style.color="green";
	pickOne2.textContent="Monopoly has sold over 275 million copies worldwide.";

});

scrabble2Button.addEventListener("click", function(){
	score=score - 1;
	scoreText.textContent=score;
	answerText2.textContent="Nope!";
	answerText2.style.color="red";
	pickOne2.textContent="";
	
});

mouseTrapButton.addEventListener("click", function(){
	score=score - 1;
	scoreText.textContent=score;
	answerText3.textContent="Nope!";
	answerText3.style.color="red";
	pickOne3.textContent="";
	
});

candylandButton.addEventListener("click", function(){
	score= score + 1;
	scoreText.textContent=score;
	answerText3.textContent="Correct!";
	answerText3.style.color="green";
	pickOne3.textContent="In 1948, Eleanor Abbott invented Candyland while she was recovering from Polio in a San Diego hospital.";
	
});

troubleButton.addEventListener("click", function(){
	score=score -1;
	scoreText.textContent=score;
	answerText3.textContent="Nope!";
	answerText3.style.color="red";
	pickOne3.textContent="";
	
});
/*changed font weight to bold to make 'Pick One' stand out after reset function - it kept going to default 'skinny'  */
resetButton.addEventListener("click", function(){
	score=0;
	scoreText.textContent=0;
	answerText1.textContent="";
	answerText2.textContent="";
	answerText3.textContent="";
	pickOne1.textContent="Pick One";
	pickOne2.textContent="Pick One";
	pickOne3.textContent="Pick One";
	
	
});