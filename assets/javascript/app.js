
var count;
//var correctAnswer;
//var incorrectAnswer;
//var unAnswered;

//$(document).ready(function(){

function initializeGame() {

	correctAnswer=0;
	incorrectAnswer=0;
	unAnswered=3;
	
	count=30;

	var counter=setInterval(timer, 1000);

	function timer(){
	  count=count-1;
	  if (count <= 0)
	  {
		 clearInterval(counter);

		sessionStorage.setItem('correctAnswer', correctAnswer);
		sessionStorage.setItem('incorrectAnswer', incorrectAnswer);
		sessionStorage.setItem('unAnswered', unAnswered)

		 window.location.href="index3.html"//counter ended
		 
		 return;
	  }

	  document.getElementById("viewTimer").innerHTML=count + " seconds remaining";
	} 
}
//});	   

function numberIncorrect(button) {
	
	incorrectAnswer++;
	unAnswered--;
	disableButtonGroup(button);

	//document.getElementById("incorrect").innerHTML=incorrectAnswer; You could use these within index.html to display a score live
}

function numberCorrect(button) {
	correctAnswer++;
	unAnswered--;
	disableButtonGroup(button);
	//document.getElementById("correct").innerHTML=correctAnswer;
}

function disableButtonGroup(button) {
	var buttonGroup = button.parentNode.parentNode.getElementsByTagName("button");

	for (i = 0; i < buttonGroup.length; i++) {
		buttonGroup[i].disabled = true;
	}
}

function loadIndex3(){

		sessionStorage.setItem('correctAnswer', correctAnswer);
		sessionStorage.setItem('incorrectAnswer', incorrectAnswer);
		sessionStorage.setItem('unAnswered', unAnswered)

		 window.location.href="index3.html"


	window.location.href='index3.html';

}

function loadScore() {
	document.getElementById("incorrect").innerHTML="Incorrect: " + sessionStorage.getItem("incorrectAnswer");
	document.getElementById("correct").innerHTML="Correct: " + sessionStorage.getItem('correctAnswer');
	document.getElementById("unanswered").innerHTML="Unanswered: " + sessionStorage.getItem('unAnswered');
}
