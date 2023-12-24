const head = document.getElementById("head");
const tails = document.getElementById("tails");

function getResult() {
    const i = Math.floor(Math.random() * 2);

    if (i == 0) return "head";
    else return "tails";
}

function toss(choice) {
    if (choice == (getResult())) { location.replace('../choose_page/index.html') }

    else {
        document.getElementById("lose").textContent = "Computer Won the Toss";
        compChoose();
        document.getElementById("choice").style.display = "none";
    }
    head.disabled = true;
    tails.disabled = true;
}

function compChoose() {
    const i = Math.floor(Math.random() * 2);
    if (i == 0) {
        document.getElementById("choose").textContent = "Computer chose to bat";
        document.getElementById("bowl").style.display = "block";
    }
    else {
        document.getElementById("choose").textContent = "Computer chose to Bowl";
        document.getElementById("bat").style.display = "block";
    }
}
function tryingRefresh(){
    if (confirm(`Are you sure you want to restart the game`)) console.log("okay");
}




head.addEventListener("click", () => toss("head"));
tails.addEventListener("click", () => toss("tails"));
document.addEventListener("", tryingRefresh);
