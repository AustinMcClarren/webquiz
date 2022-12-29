var downloadTimer = document.querySelector("#countdown");
var startButton = document.querySelector("#start-Button");
var quizQuestions = document.querySelector("#quizQuestions");
var choicebtn = document.querySelector(".choicebtn");
var timeleft = 100;
var questionCounter = 0;
var answerButton;
var currentIndex = 0;
var divchoices = document.querySelector(".choices");
var answerBtn = document.querySelector(".answerBtn");

//startTimer function
function timer() {
	var downloadTimer = setInterval(function () {
		if (timeleft <= 0) {
			clearInterval(downloadTimer);
			document.getElementById("countdown").innerHTML = "Finished";
		} else {
			document.getElementById("countdown").innerHTML = timeleft + " time left";
		}
		timeleft -= 1;
	}, 1000);
}

//start quiz function
function startQuiz() {
	console.log();
	startButton.disabled = true;
	divchoices.removeAttribute("hidden");
	displayQuestion();
}

//event.target this
// alert(questions.target.answer);    ????
// alert(questions.target);

//questions for the quiz!
var questions = [
	{
		question: "Which one is a looping structure in JavaScript?",
		choices: ["All the below", "For", "While", "do-while loops"],
		answer: "All the below",
	},
	{
		question: "What are the two basic groups of data types in JavaScript?",
		choices: [
			"Primitive and attribute",
			"Primitive and reference types",
			"Reference types and attribute",
			"None of the above",
		],
		answer: "Primitive and reference types",
	},
	{
		question: "Commonly used data types DO NOT include:",
		choices: ["strings", "booleans", "alerts", "numbers"],
		answer: "alerts",
	},
	{
		question: "Boolean operators that can be used in JavaScript include:",
		choices: [
			"'And' Operator &&",
			"'Or' Operator ||",
			"'Not' Operator !",
			"All the above",
		],
		answer: "All the above",
	},
	{
		question:
			"Which one of these is not among the three different types of errors in JavaScript?",
		choices: [
			"Animation time errors",
			"Load time errors",
			"Run time errors",
			"Logical Errors",
		],
		answer: "Animation time errors",
	},
	{
		question: "What is the data type of variables in JavaScript?",
		choices: [
			"Object data types",
			"Function data type",
			"None of the above",
			"All of the above",
		],
		answer: "Object data types",
	},
	{
		question:
			"The condition in an if / else statement is enclosed within ____.",
		choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
		answer: "parentheses",
	},
	{
		question: "Arrays in JavaScript can be used to store ____.",
		choices: [
			"numbers and strings",
			"other arrays",
			"booleans",
			"all of the above",
		],
		answer: "all of the above",
	},
	{
		question:
			"String values must be enclosed within ____ when being assigned to variables.",
		choices: ["commas", "curly brackets", "quotes", "parentheses"],
		answer: "quotes",
	},
	{
		question:
			"A very useful tool used during development and debugging for printing content to the debugger is:",
		choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
		answer: "console.log",
	},
	{
		question: "What is the type of Pop up boxes available in JavaScript?:",
		choices: ["Alert", "Confirm", "Prompt", "All the above"],
		answer: "All the above",
	},
];

function displayQuestion() {
	var currentquestions = questions[currentIndex].question;
	quizQuestions.textContent = currentquestions;
	console.log(currentquestions);
	for (i = 0; i < questions[currentIndex].choices.length; i++) {
		var currentchoices = questions[currentIndex].choices[i];
		var choicebtn = document.createElement("button");
		choicebtn.addEventListener("click", verifyAnswer);
		choicebtn.setAttribute("class", `btn-${currentIndex}`);
		choicebtn.textContent = currentchoices;
		divchoices.append(choicebtn);
	}

	//current index is grabbing whats in the array
	// line 128 are choices
	// . add attr has to be an ID to identify buttons(choices) .
	// id could be btn(index)

	//divchoices.addEventListener("click", verifyAnswer);
}

function checkanswer(event) {
	var correctanswer = questions[currentIndex].answer;
	var useranswer = event.target.innerHTML;
	console.log(event);
	console.log(correctanswer == useranswer);
}

//will display questions when clicking start button
startButton.addEventListener("click", startQuiz);

// tells you the right answer when clicked
//refactor the oldButtons variable where you only have to declare it once.  
function verifyAnswer(event) {
	event.preventDefault();
	choicebtn = event.target;
	console.log(quizQuestions);
	if (choicebtn.innerHTML === questions[currentIndex].answer) {
		console.log("CONGRATS, THAT'S RIGHT!");
		var oldButtons = document.querySelectorAll(`.btn-${currentIndex}`);
		for (var i = 0; i < oldButtons.length; i++) {
			oldButtons[i].setAttribute("class","hide");
		}
		currentIndex++;
		displayQuestion();
	} else {
		console.log("THAT'S INCORRECT");
		timeleft -= 5;
		var oldButtons = document.querySelectorAll(`.btn-${currentIndex}`);
		for (var i = 0; i < oldButtons.length; i++) {
			oldButtons[i].setAttribute("class","hide");
		}
		currentIndex++;
		displayQuestion();
	}
}

// //lost game function
// function loseGame() {
// 	wordBlank.textContent = "GAME OVER";
// 	loseCounter++;
// 	startButton.disabled = false;
// 	setLosses();
// }
