/*----state variables----*/
//the three slots will be random int
let slot1;
let slot2;
let slot3;


/*-----cached elements----*/
//assign button element
let spinBtn = document.querySelector('button');

//assign msg variable before game starts
let msg = document.querySelector('h4').innerText = 'Spin!';
document.querySelector('h4').style.color = 'lightgreen'

// assign each int to a img/symbol




/*----event listener----*/
//click the button to spin again 
spinBtn.addEventListener('click', spin);

/*------functions-----*/
// spin reiterates the random function for each slot
function spin() {
    slot1 = createInt();
    slot2 = createInt();
    slot3 = createInt();
    render();
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
    if (slot1 === slot2 && slot2 === slot3) {
        document.querySelector('h4').innerText = 'Winner!';
        document.querySelector('h4').style.color = 'lightblue';
        document.querySelector('h4').style.fontSize = 'xx-large'
    // when three symbols don't match the message will read "Spin Again!"
    } else {
        document.querySelector('h4').innerText = 'Spin Again!';
        document.querySelector('h4').style.color = 'red';
        document.querySelector('h4').style.fontSize = 'large';
    }
}

// if (slot1 === 3) {
//     document.querySelector('h4').innerText = '3!';
// } else if (slot1 !== 3) {
//     document.querySelector('h4').innerText = 'Spin Again!';
// }