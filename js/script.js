/*----state variables----*/
//the three slots will be random int
let slot1 = randomInt();
let slot2 = randomInt();
let slot3 = randomInt();

//assign button element
let spinBtn = document.querySelector('button');

/*-----cached elements----*/
// assign each int to a img/symbol




/*----event listener----*/
//click the spin button to play again 
spinBtn.addEventListener('click', spin);

/*------functions-----*/
// spin reiterates the random function for each slot
function spin() {
    slot1 = randomInt();
    slot2 = randomInt();
    slot3 = randomInt();
    render();
}

// declare random int for slot variables 
function randomInt() {
    return Math.ceil(Math.random(1) * 3)
}

// assigns the random states and message to the DOM 
function render() {
    document.getElementById('slot1').innerText = slot1;
    document.getElementById('slot2').innerText = slot2;
    document.getElementById('slot3').innerText = slot3;
    message();
}

//renders message using boolean function
function message() {
    // when you get three matching symbols the message will read "Winner!"
    if (slot1 === slot2 && slot2 === slot3) {
        document.querySelector('h4').innerText = 'Winner!';
    // when three symbols don't match the message will read "Spin Again!"
    } else {
        document.querySelector('h4').innerText = 'Spin Again!';
    }
}



// git test4 for css commit

//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