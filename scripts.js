var player = prompt("JavaScript Playground, Enter your name" );
alert( "Hello "  + player.toUpperCase()  + " Welcome and Let's play a programming quiz game");
var questions = 5;
var result = 0; // this is a variable to hold answers
//variable to keep track of questions asked
var questionsLeft = "[ " + questions + " questions left]";
var answer1 = prompt( " What programming language is like a gem " + questionsLeft );
if (answer1.toUpperCase === "RUBY") {
  result += 1;
} 
questions -= 1;
questionsLeft = ' [ ' + questions + ' questions left]';
var answer2 = prompt('Which programming language is associated with a snake ' + questionsLeft );
if(answer2.toUpperCase === "python"){
	result += 1;
}
questions -= 1;
questionsLeft = '[ ' + questions + ' questions left]';
var answer3 = prompt('What is the meaning of PHP ' + questionsLeft );
if(answer3.toUpperCase === "HYPERTEXT PREPROCESSOR"){
	result += 1;
}
questions -= 1;
questionsLeft = '[ ' + questions + ' questions left]';
var answer4 = prompt('What language is used to build mobile apps' + questionsLeft );
if(answer4.toUpperCase === "ANDROID"){
	result += 1;
}
questions -= 1;
questionsLeft = '[ ' + questions + ' questions left]';
var answer5 = prompt('What is the common language used for backend programming' + questionsLeft);
if(answer5 ==="PHP") {
	result += 1;
}
alert("End of the Quiz. Let's see what you got?");
alert(" You got "  + result + " out of 5 questions correct.");

if (result === 5 ) {
  alert("<p><strong> Congrats!!!, You have earned a Gold badge.</strong> </p>");
  }
else if ( result >= 3 ) {
    alert( "<p><strong> Congrats!!!, You have earned a Silver badge.</strong> </p>");
      }
else if ( result >= 1) {
        alert("<p><strong> No Badge for you.</strong> </p> ");
        }

		else {
            document.write ("<p><strong> No badge for you, try again.</strong></p>");
		}
