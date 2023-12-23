const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");
const r4 = document.getElementById("r4");
const r5 = document.getElementById("r5");
const r6 = document.getElementById("r6");
let runs = 0;

function CheckOut(num) {
    disappear(k,l);
    print(num,2);
    const i=CompMove();
    print(i,1);
    if (num == i) { out(); }
    else addRuns(num);
}

function CompMove() {
    const i = Math.floor(Math.random() * 6) + 1;
    
    return i;

}

function addRuns(num) {
    runs += num;
    document.getElementById("score").textContent = `Computer score: ${runs}`;
}

function out() {
    document.getElementById("scorecard").style.display="block";
    document.getElementById("images").style.display="none";
    document.getElementById("ball").style.display="none";
    document.getElementById("outt").style.display = "flex";
    document.getElementById("score").textContent = `Computer score: ${runs}`;
    
    document.getElementById("score2").style.color="navy";
    document.getElementById("score2").textContent=`Target: ${runs +1}`;
    // Set the value in session storage
    sessionStorage.setItem('myValue', `${runs + 1}`);



}
let k="s1",l="m1";
function print(num,num2){
    if(num2==1){
        k="s"+num;
        document.getElementById(k).style.display="block";
        
    }
      else {
        l="m"+num;
        document.getElementById(l).style.display="block";
    }
    
}


function disappear(str1,str2){
    document.getElementById(str1).style.display="none";
    document.getElementById(str2).style.display="none";
}








r1.addEventListener('click', () => CheckOut(1));
r2.addEventListener('click', () => CheckOut(2));
r3.addEventListener('click', () => CheckOut(3));
r4.addEventListener('click', () => CheckOut(4));
r5.addEventListener('click', () => CheckOut(5));
r6.addEventListener('click', () => CheckOut(6));





