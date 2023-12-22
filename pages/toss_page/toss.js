

const head=document.getElementById("2");
const tails=document.getElementById("3");

function getResult() {
    const i=Math.floor(Math.random()*2);
    
    if(i==0) return "head";
    else return "tails";
}



function toss(choice){
    if(choice==(getResult())) {location.replace('../choose_page/index.html')}
        
    else {document.getElementById("1").textContent="you lose";
compChoose();}
head.disabled= true;
tails.disabled=true;
}

function compChoose(){
    const i=Math.floor(Math.random()*2);
    if(i==0){
        document.getElementById("4").textContent="Computer chose to bat";
        document.getElementById("6").style.display="block";
    }
    else {
        document.getElementById("4").textContent="Computer chose to Bowl";
    document.getElementById("5").style.display="block";}
}





   head.addEventListener("click",()=>toss("head"));
   tails.addEventListener("click",()=>toss("tails"));
