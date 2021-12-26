let yourCount = 0;
let compCount = 0;
let result = '';
const you = document.getElementById('your-counter');
const comp = document.getElementById('computer-counter');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getAnimations('s');
const choice = document.querySelectorAll('.choice');
const text = document.getElementById('result-text');

function getComputerChoice() {
    const compChoices = ['r', 'p', 's'];
    const randomChoice = Math.floor(Math.random() * compChoices.length);
    return compChoices[randomChoice];
}

choice.forEach((myChoice) =>
    myChoice.addEventListener('click', function (e) {
        game(e.target.id);
    })
);

function win() {
    text.innerText = 'You Won!';
    yourCount++;
    you.innerText = yourCount;
}

function lose() {
    text.innerText = 'You Lost!';
    compCount++;
    comp.innerText = compCount;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    const result = userChoice + computerChoice;
    switch (result) {
        case 'rr':
        case 'pp':
        case 'ss':
            text.innerText = "It's a Draw!";
            break;
        case 'rs':
        case 'sp':
        case 'pr':
            win();
            break;
        case 'sr':
        case 'ps':
        case 'rp':
            lose();
            break;
    }
}
