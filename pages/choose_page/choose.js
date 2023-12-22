
const bat=document.getElementById("bat");
const bowl=document.getElementById("bowl");


function printBatBowl(choice){
    
    if(choice=="bat"){
        document.getElementById("choose_result").textContent="You chose to bat";
        document.getElementById("sbat").style.display="block";
    }
    else {
        document.getElementById("choose_result").textContent="You chose to Bowl";
    document.getElementById("sbowl").style.display="block";}
    bat.disabled= true;
    bowl.disabled= true;
    document.getElementById("images").style.display="none";
    
    
}

bat.addEventListener('click',()=>printBatBowl("bat"));
bowl.addEventListener('click',()=>printBatBowl("bowl"));

