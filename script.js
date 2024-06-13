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
}

const grid = document.getElementsByClassName("block");

for (i = 0; i < grid.length; i++) {
  grid[i].addEventListener("click", function() {
    grid[i].style.backgroundColor = "black";
    alert("Hello");
  })
}
