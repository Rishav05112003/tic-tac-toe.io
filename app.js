let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".btn2");
let newbtn = document.querySelector(".btn1");
let msgcontainer = document.querySelector(".msgcontainer"); 
let msg = document.querySelector(".msg");

let turnO = true;

const winPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO === true){
            box.innerText = "X";
            turnO = false;
        }
        else{
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();

        drawGame();
    });
});




const drawGame= () =>{
    let isDraw = 0;
    for(let box of boxes){
        if(box.innerText == 'X' || box.innerText == 'O'){
            isDraw++;
        }
    }

    if(isDraw === 9){
        msgcontainer.classList.remove("hide");
        msg.innerText = 'Its a draw!...Please RESET Game';
    }
    
};
const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}


const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}


const showwinner = (win) => {
    msgcontainer.classList.remove("hide");
    msg.innerText = 'Conngratulations!!..The Winner is ' + win;
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;

        if(pos1value != ""  && pos2value != "" && pos3value != ""){
             if(pos1value === pos2value && pos2value === pos3value){
                console.log("winnner");
                showwinner(pos1value);
             }
        }   
    }
    

};

reset.addEventListener("click" , resetGame);