const gridSizeSlider = document.getElementById("gridSize");
const squareDiv = document.querySelector(".square-div");
const gridNumber = document.getElementById("gridSizeNumber");

const blackButton = document.getElementById("blackButton");
const rainbowButton = document.getElementById("rainbowButton");
const eraserButton = document.getElementById("eraserButton");
const clearButton = document.getElementById("clearButton");

let globalGridSize = 16;
let currentColorMode = "black";

function activeButton(color) {
  if (color == "black") {
    eraserButton.classList.remove("active");
    eraserButton.classList.add("default");
    rainbowButton.classList.remove("active");
    rainbowButton.classList.add("default");
    blackButton.classList.remove("default");
    blackButton.classList.add("active");
  } else if (color == "rainbow") {
    eraserButton.classList.remove("active");
    eraserButton.classList.add("default");
    rainbowButton.classList.remove("default");
    rainbowButton.classList.add("active");
    blackButton.classList.remove("active");
    blackButton.classList.add("default");
  } else if (color == "white") {
    eraserButton.classList.remove("default");
    eraserButton.classList.add("active");
    rainbowButton.classList.remove("active");
    rainbowButton.classList.add("default");
    blackButton.classList.remove("active");
    blackButton.classList.add("default");
  }
}
blackButton.onclick = () => {
  activeButton("black");
  currentColorMode = "black";
};
rainbowButton.onclick = () => {
  activeButton("rainbow");
  currentColorMode = "rainbow";
};
eraserButton.onclick = () => {
  activeButton("white");
  currentColorMode = "white";
};
clearButton.onclick = () => clearEverything();

function clearEverything() {
  squareDiv.innerHTML = "";
  gridSizeSlider.value = globalGridSize;
  let flexBasis = `calc(100% / ${globalGridSize})`;
  createGrid(globalGridSize, flexBasis);
}

gridSizeSlider.addEventListener("input", function () {
  globalGridSize = gridSizeSlider.value;
  gridSizeSlider.value = globalGridSize;
  gridNumber.textContent = `${globalGridSize} x ${globalGridSize}`;

  let flexBasis = `calc(100% / ${globalGridSize})`;
  squareDiv.innerHTML = "";
  createGrid(globalGridSize, flexBasis);
});

function createGrid(size, flexBasisVar) {
  for (let j = 0; j < size * size; j++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    cell.style.backgroundColor = "white";
    cell.style.flexBasis = flexBasisVar;
    squareDiv.appendChild(cell);

    cell.addEventListener("mouseover", paint);
  }
}

function paint(e) {
  if (currentColorMode === "rainbow") {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    let rainbowColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    e.target.style.backgroundColor = rainbowColor;
  } else if (currentColorMode === "black") {
    e.target.style.backgroundColor = currentColorMode;
  } else if (currentColorMode === "white") {
    e.target.style.backgroundColor = currentColorMode;
  }
}

window.onload = () => {
  createGrid(globalGridSize, `calc(100% / ${globalGridSize})`);
  gridSizeSlider.value = globalGridSize;
  activeButton("black");
};

// Footer Stuff
const footerPicture = document.getElementById("footerPicture");

footerPicture.addEventListener("mouseenter", () => {
  footerPicture.animate({ transform: ["rotate(0deg)", "rotate(360deg)"] }, 550);
});
