let boxes = document.querySelectorAll(".box");
let messagebox = document.querySelector(".message");
let newgame = document.querySelector(".new-btn")

let turnO = true;
boxes.forEach((box) => {
box.addEventListener("click", () =>{ 
    console.log('Box clicked');
if ( turnO === true){
    box.innerText = "O";
    turnO = false;
}else {
    box.innerText = "X";
    turnO = true;
}
box.disabled = true ;

checkWinner();

});
});
const disableboxes = () => {
    for (let box of boxes){
        box.disabled = true ;
    }
    }


const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
 ]
    const showWinner= (winner) => {
     messagebox.innerText = `Congrats , winner is ${winner}`;
     messagebox.classList.remove("hide");
     disableboxes();
    }
    const checkWinner = () => {
       for(let i of win){
          console.log();
          let posi1 = boxes[i[0]].innerText;
          let posi2 = boxes[i[1]].innerText;
          let posi3 = boxes[i[2]].innerText;
         if(posi1 != "" && posi2 != "" && posi3 != ""){
          if ( posi1 === posi2 && posi2 === posi3){
            console.log("winner");
            showWinner(posi1);

          }
        }
       }

    }

    const Functionnewgame=()=>{
        window.location.reload();
    }

