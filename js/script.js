// state variables 
//the three slots will be random int
let slot1 = randomInt();
let slot2 = randomInt();
let slot3 = randomInt();
// declare a message 
let spinBtn = document.querySelector('button');

console.log(slot1, slot2, slot3);

// assign message element 
// document.querySelector('h4').innerText = msg;

//assign button element
spinBtn =

// assign each int to a img/symbol

// event listener
spinBtn.addEventListener('click', spin);
//click the spin button to play again 
function spin() {
    slot1 = randomInt();
    slot2 = randomInt();
    slot3 = randomInt();
    checkWinner();
    render();
}

// declare random int for slot variables 
function randomInt() {
    return Math.ceil(Math.random(1) * 3)
    // console.log(randomInt())
}

function render() {
    // the three slots will be assigned to my bubbles on the web browser
    document.getElementById('slot1').innerText = slot1;
    document.getElementById('slot2').innerText = slot2;
    document.getElementById('slot3').innerText = slot3;
    checkWinner();
}

function checkWinner() {
    // when you get three matching symbols the message will read Winner!
    if (slot1 === slot2 === slot3) {
        return document.querySelector('h4').innerText = 'Winner!';
        console.log('Winner!')

        // when you don't have three matching symbols the message will read Spin Again!
    } else {
        return document.querySelector('h4').innerText = 'Spin Again!';
        console.log('Spin Again!')
    }
}
// render();