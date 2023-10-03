const gridSizeSlider = document.getElementById("gridSize");
const squareDiv = document.querySelector(".square-div");
const gridSizeNumber = document.getElementById("gridSizeNumber");
const clearButton = document.getElementById("clearButton");
let globalGridSize = 16;

gridSizeSlider.addEventListener("input", function () {
  const gridSize = gridSizeSlider.value;
  globalGridSize = gridSize;
  gridSizeNumber.textContent = `${gridSize} x ${gridSize}`;
  // Update your grid size here, e.g., by creating a new grid with the desired number of divs.
  // You may need to remove the existing divs and generate a new set of divs.
  updateGridSize(gridSize);
});

function updateGridSize(size) {
  // You can implement your logic to update the grid size here
  // For example, remove existing divs and generate a new set of divs
  squareDiv.innerHTML = ""; // Clear existing divs
  createGrid(size);
}

function createGrid(size) {
  // Generate a new grid with 'size' number of divs
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      squareDiv.appendChild(cell);

      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black";
      });
    }
  }
}

// Initial grid creation with default size (16)
createGrid(16);

clearButton.addEventListener("click", () => {
  updateGridSize(globalGridSize);
});
