let boxes = document.querySelectorAll(".box")

let resetButton = document.querySelector("#Reset-btn")
let newGame = document.querySelector("#New-game")

let msgCont = document.querySelector(".msg-cont")
let msg = document.querySelector("#msg")

let turnO = true

const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
]
 

boxes.forEach( (box)=>{
  box.addEventListener("click",()=>{
    if(turnO){
      box.innerHTML = "X"
      box.style.color="#347433"
      turnO = false
    }
    else{
      box.innerHTML = "O"
      box.style.color="#b0413e"
      turnO = true
    }
    box.disabled = true
    checkWinner()
  })
})

const diableboxes = () =>{
  for(let box of boxes){
    box.disabled = true
  }
}

const enablebox = () =>{
  for(let box of boxes){
    box.disabled = false
    box.innerHTML= ""
  }
}

const showWinner = (winner) =>{
  msg.innerHTML = `Congratualtion , Winner is ${winner}`

  if(winner=="X"){
    msg.style.color = "#347433";
  } 
  else{
    msg.style.color = "#b0413e";
  }

  msgCont.classList.remove("hide")
  diableboxes()
}

const resetGame = () =>{
  turnO = true
  enablebox()
  msgCont.classList.add("hide")
}

const checkWinner = () =>{
  for(let pat of winPatterns){
    let pos1 = boxes[pat[0]].innerHTML
    let pos2 = boxes[pat[1]].innerHTML
    let pos3 = boxes[pat[2]].innerHTML

    if(pos1!=''&& pos2!=''&& pos3!=''){
      if(pos1==pos2 && pos2==pos3){
        showWinner(pos1)
      }
    }
  }
}

resetButton.addEventListener("click",resetGame)
newGame.addEventListener("click",resetGame)