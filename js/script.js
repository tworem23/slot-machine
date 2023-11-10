// state variables 
//the three slots will be random int
let slot1 = randomInt();
let slot2 = randomInt();
let slot3 = randomInt();
// declare a message 
let msg;
let spinBtn;

console.log(slot1, slot2, slot3);
// cached elements
// the three slots will be assigned to my bubbles on the web browser
function render() {
    document.getElementById('slot1').innerText = slot1;
    document.getElementById('slot2').innerText = slot2;
    document.getElementById('slot3').innerText = slot3;
}

render();
// assign message element 
document.querySelector('h4').innerText = msg;

//assign button element
spinBtn = document.querySelector('button')

// assign each int to a img/symbol


// event listener
//click the spin button to play again 
function spin() {
spinBtn.addEventListener('click', init())
render();
}
// functions
// when you get three matching symbols the message will read Winner!
function checkWinner() {
    if (slot1 === slot2 === slot3) {
        console.log('Winner!')
// when you don't have three matching symbols the message will read Spin Again!
    } else {
        console.log('Spin Again!')
    }
}  
// declare random int for slot variables 
function randomInt() {
return Math.ceil(Math.random(1) * 3)
}
console.log(randomInt())