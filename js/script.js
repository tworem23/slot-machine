/*----state variables----*/
//the three slots will be random int
let slot1;
let slot2;
let slot3;

let winner;

let spinInterval;

/*-----cached elements----*/
//assign button element
let spinBtn = document.querySelector('button');

//assign msg variable before game starts
let msg = document.querySelector('h4').innerText = 'Spin!';
document.querySelector('h4').style.color = 'lightgreen';

// assign each int to a img/symbol
if (slot1 === 1 || slot2 === 1 || slot3 === 1) {
    document.querySelectorAll('div') = document.getElementById()
}else if (slot1 === 2 || slot2 === 2 || slot3 === 2) {
    document.querySelectorAll('div') = document.getElementById()
} else if (slot1 === 3 || slot2 === 3 || slot3 === 3) {
    document.querySelectorAll('div') = document.getElementById()
}



/*----event listener----*/
//click the button to spin again 
spinBtn.addEventListener('click', handleClick);

/*------functions-----*/

async function handleClick() {
    winner = null;
    await spin();
    checkWinner();
    render();
}

// spin reiterates the random function for each slot
async function spin() {
    return await new Promise(function(res) {
        let count = 0;
        spinInterval = setInterval(function() {
            slot1 = createInt();
            slot2 = createInt();
            slot3 = createInt();
            render();
            count++;
            if (count === 20) {
                clearInterval(spinInterval);
                res('');
            }
        }, 100);
    });
}


function win() {
    if (winner) {
        spinBtn.removeEventListener('click', spin);
        setTimeout(function(){
            spinBtn.addEventListener('click', spin);
        }, 500);
    }
}

// declare random int for slot variables 
function createInt() {
    return Math.ceil(Math.random(1) * 3);
}

// assigns the random states and message to the DOM 
function render() {
    document.getElementById('slot1').innerText = slot1;
    document.getElementById('slot2').innerText = slot2;
    document.getElementById('slot3').innerText = slot3;
    renderMsg();
}

// renders msg using boolean function
function renderMsg() {
    // when you get three matching symbols the message will read "Winner!"
    if (winner) {
        document.querySelector('h4').innerText = 'Winner!';
        document.querySelector('h4').style.color = 'lightblue';
        document.querySelector('h4').style.fontSize = 'xx-large';
    // when three symbols don't match the message will read "Spin Again!"
    } else if (winner === false) {
        document.querySelector('h4').innerText = 'Spin Again!';
        document.querySelector('h4').style.color = 'red';
        document.querySelector('h4').style.fontSize = 'large';
    } else {
     // while the reels are spinning message
     document.querySelector('h4').innerText = 'Lets Go!'
    }
}


function checkWinner() {
    // when you get three matching symbols the message will read "Winner!"
    if (slot1 === slot2 && slot2 === slot3) {
        winner = true;
    // when three symbols don't match the message will read "Spin Again!"
    } else {
        winner = false;
    }
}


// if (slot1 === 3) {
//     document.querySelector('h4').innerText = '3!';
// } else if (slot1 !== 3) {
//     document.querySelector('h4').innerText = 'Spin Again!';
// }

