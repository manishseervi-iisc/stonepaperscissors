
// Get the value from session storage
var passedValue = sessionStorage.getItem('myValue');

document.getElementById("score2").textContent = `Target: ${passedValue}`;

const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");
const r4 = document.getElementById("r4");
const r5 = document.getElementById("r5");
const r6 = document.getElementById("r6");
let runs = 0;


function CheckOut(num) {
    disappear(k,l)
    print(num,2);
    const i=CompMove();
    print(i,1);
    if (num == i) { out(); }
    else addRuns(i);
}

function CompMove() {
    const i = Math.floor(Math.random() * 6) + 1;
   
    return i;

}

function addRuns(num) {
    runs += num;
    document.getElementById("score").textContent = `Computer score: ${runs}`;
    if (runs >= passedValue) { win(); }

}
function win() {
    document.getElementById("out").textContent = "Computer Wins";
    document.getElementById("lose").style.display="block";
    disable();

}
let k="s1",l="m1";
function print(num,num2){
    if(num2==1){
        k="s"+num;
        document.getElementById(k).style.display="flex";
        
    }
      else {
        l="m"+num;
        document.getElementById(l).style.display="flex";
    }
    
}

function disappear(str1,str2){
    document.getElementById(str1).style.display="none";
    document.getElementById(str2).style.display="none";
}

function disable() {
    document.getElementById("link").style.display = "block";
    document.getElementById("images").style.display="none";
    document.getElementById("ball").style.justifyContent="space-between";
    document.getElementById("ball").style.marginTop="10vh";
    document.getElementById("scorecard").style.flexDirection="column";

    document.getElementById("out").style.display = "block";
    document.getElementById("inn").style.order="-1";
}
function out() {
    disable();



    const diff = passedValue - runs - 1;
    document.getElementById("score").textContent = `Computer Score:${runs}`;
    
    document.getElementById("out").textContent=`You win by ${diff} runs`;
    document.getElementById("win").style.display="block";


}

r1.addEventListener('click', () => CheckOut(1));
r2.addEventListener('click', () => CheckOut(2));
r3.addEventListener('click', () => CheckOut(3));
r4.addEventListener('click', () => CheckOut(4));
r5.addEventListener('click', () => CheckOut(5));
r6.addEventListener('click', () => CheckOut(6));


