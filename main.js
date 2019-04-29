// caching the DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreboard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice(){
	const choices = ['p', 'r', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];

}

function convertToWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return 'Scissors';
}

function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = 'user'.fontsize(3).sup();
	const smallCompWord = 'comp'.fontsize(3).sup();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} You Win!`;
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 500);
}


function lose(userChoice, computerChoice) {
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = 'user'.fontsize(3).sup();
	const smallCompWord = 'comp'.fontsize(3).sup();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} You Lost!`;
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
	const smallUserWord = 'user'.fontsize(3).sup();
	const smallCompWord = 'comp'.fontsize(3).sup();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} Draw!`;
	document.getElementById(userChoice).classList.add('yellow-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('yellow-glow'), 500);
}

// Switch function more efficient here than if function
function game(userChoice){
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {
	case 'rs':
	case 'pr':
	case 'sp':
		win(userChoice, computerChoice);
		break;
	case 'rp':
	case 'ps':
	case 'sr':
		lose(userChoice, computerChoice);
		break;
	case 'rr':
	case 'pp':
	case 'ss':
		draw(userChoice, computerChoice);
		break;

}
	
}

function main() {
	paper_div.addEventListener('click', () =>game('p'));
	
	rock_div.addEventListener('click', function(){
		game('r');
	})

	scissors_div.addEventListener('click', function(){
		game('s');
	})

}

main();
