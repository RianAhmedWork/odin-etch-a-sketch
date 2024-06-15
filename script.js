const main = document.querySelector(".main");

createGrid(16);

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      const block = document.createElement("div");
      block.style.width = 100 / num + "%";
      block.style.height = 100 / num + "%";
      block.classList.add("block");
      main.appendChild(block);
    }
  }
  etchBlack();
}

function deleteGrid(num) {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  createGrid(num);
}

function etchBlack() {
  const grid = document.getElementsByClassName("block");
  for (i = 0; i < grid.length; i++) {
    grid[i].addEventListener("mouseover", function() {
      this.classList.add("black");
    });
  }
}

const newGrid = document.querySelector("#newGrid");
newGrid.addEventListener("click", promptUser);

function promptUser() {
  let num = prompt("Enter a number from 1 to 100");
  while ((num < 1 || num > 100)) {
    num = prompt("Enter a number from 1 to 100");
  }
  deleteGrid(num);
}
