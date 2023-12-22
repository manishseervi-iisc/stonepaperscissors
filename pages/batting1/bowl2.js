
// Get the value from session storage
var passedValue = sessionStorage.getItem('myValue');

document.getElementById("7").textContent = `Target is ${passedValue}`;

const r1 = document.getElementById("1");
const r2 = document.getElementById("2");
const r3 = document.getElementById("3");
const r4 = document.getElementById("4");
const r5 = document.getElementById("5");
const r6 = document.getElementById("6");
let runs = 0;

function CheckOut(num) {
    const i=CompMove();
    if (num == i) { out(); }
    else addRuns(i);
}

function CompMove() {
    const i = Math.floor(Math.random() * 6) + 1;
    document.getElementById("comp").textContent = `Comp played ${i}`
    return i;

}

function addRuns(num) {
    runs += num;
    document.getElementById("compScore").textContent = `Computer score: ${runs}`;
    if (runs >= passedValue) { win(); }

}
function win() {
    document.getElementById("out").textContent = "Computer Wins";

    disable();

}

function disable() {
    document.getElementById("link").style.display = "block";
    r1.disabled = true;
    r2.disabled = true;
    r3.disabled = true;
    r4.disabled = true;
    r5.disabled = true;
    r6.disabled = true;
    document.getElementById("out").style.display = "block";
}
function out() {
    disable();


    const diff = passedValue - runs - 1;
    document.getElementById("compScore").textContent = `Computer Score:${runs}`;
    document.getElementById("out").textContent = `You win by ${diff} runs`;


}


r1.addEventListener('click', () => CheckOut(1));
r2.addEventListener('click', () => CheckOut(2));
r3.addEventListener('click', () => CheckOut(3));
r4.addEventListener('click', () => CheckOut(4));
r5.addEventListener('click', () => CheckOut(5));
r6.addEventListener('click', () => CheckOut(6));


