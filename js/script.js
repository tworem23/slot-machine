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
//declares all of the actions that need to happen when button is clicked for a clean game
async function handleClick() {
    winner = null;
    spinBtn.removeEventListener('click', handleClick);
    await spin();
    checkWinner();
    spinBtn.addEventListener('click', handleClick);
    render();
}

// spin reiterates the random function for each slot 20 times in 0.1 sec
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

// renders a message onto the DOM
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
     document.querySelector('h4').style.color = 'lightblue';
     document.querySelector('h4').style.fontSize = 'x-large';
    }
}

//assign boolean to state variables 
function checkWinner() {
    if (slot1 === slot2 && slot2 === slot3) {
        winner = true;
    } else {
        winner = false;
    }
}
