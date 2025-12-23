let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let count =0;
let turn = true;
let winPatterns =[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];   //2d array

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn === true){
            box.innerText = "O";
            box.style.color = "green";
            turn = false;
        }
        else{
             box.innerText = "X";
             box.style.color = "red";
            turn = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
    });
});

const resetGame = () => {
    count = 0;
    turn=true;
    enableboxes();

}

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(let box of boxes){
        box.disabled= false;
        box.innerText = '';
        msgContainer.classList.add("hide");
    }
}

const showWinner = (winner) => {
    msg.innerText =`Congratulation , winner is ${ winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val != '' && pos2Val != '' && pos3Val != ''){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        
        }
    }

    if(count === 9){
        msg.innerText = "Its Draw";
        msgContainer.classList.remove("hide");
        disableboxes();
    }
};

resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);
    
