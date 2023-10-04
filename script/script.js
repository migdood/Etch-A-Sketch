const gridSizeSlider = document.getElementById("gridSize");
const squareDiv = document.querySelector(".square-div");
const gridNumber = document.getElementById("gridNumber");

const blackButton = document.getElementById("blackButton");
const rainbowButton = document.getElementById("rainbowButton");
const whiteButton = document.getElementById("whiteButton");
const clearButton = document.getElementById("clearButton");
let globalGridSize = 16;
let colorMode = black;

gridSizeSlider.addEventListener("input", function () {
  const gridSize = gridSizeSlider.value;
  globalGridSize = gridSize;
  gridNumber.textContent = `${gridSize} x ${gridSize}`;
  const flexvalue = `calc(100% / ${gridSize})`;

  squareDiv.innerHTML = "";

  createGrid(gridSize, flexvalue);
});

function createGrid(size, flexBasis) {
  for (let j = 0; j < size * size; j++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    cell.style.flexBasis = flexBasis;
    squareDiv.appendChild(cell);

    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black";
    });
  }
}

createGrid(globalGridSize, `calc(100% / ${globalGridSize})`);

clearButton.addEventListener("click", () => {
  squareDiv.innerHTML = "";
  createGrid(globalGridSize, `calc(100% / ${globalGridSize})`);
});
