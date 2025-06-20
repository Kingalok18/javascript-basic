
let numSelected = null;
// let tileSelected = null;

let errors = 0;

let board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

let solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function() {
    setGame();
}

function setGame() {
    // Digits 1-9
    for (let i = 1; i <= 9; i++){
        let number = document.createElement("div")
        number.id = i
        number.innerText = i
        number.addEventListener("click", selectNumber)
        number.classList.add("number")
        document.getElementById("digits").appendChild(number)
    }

    // Board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div")
            tile.id = r.toString() + "-" + c.toString()
            if (board[r][c] != "-") {
                tile.innerText = board[r][c]
                tile.classList.add("tile-start")
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile)
            tile.classList.add("tile")
            document.getElementById("board").append(tile)
        }
    }
}

function selectNumber(){
    if (numSelected != null) {
        numSelected.classList.remove("number-selected")
    }
    numSelected = this
    numSelected.classList.add("number-selected")
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        } 
        let coords = this.id.split("-")
        let r = parseInt(coords[0])
        let c = parseInt(coords[1])

        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id
            this.classList.add("tile-start")
        }
        else {
            errors += 1
            document.getElementById("errors").innerText = errors
        }
    }
}
