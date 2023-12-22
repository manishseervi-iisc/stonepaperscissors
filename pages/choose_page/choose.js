
const bat=document.getElementById("bat");
const bowl=document.getElementById("bowl");


function printBatBowl(choice){
    
    if(choice=="bat"){
        document.getElementById("choose_result").textContent="You chose to bat";
        document.getElementById("1").style.display="block";
    }
    else {
        document.getElementById("choose_result").textContent="You chose to Bowl";
    document.getElementById("2").style.display="block";}
    bat.disabled= true;
    bowl.disabled= true;
    
    
}

bat.addEventListener('click',()=>printBatBowl("bat"));
bowl.addEventListener('click',()=>printBatBowl("bowl"));

